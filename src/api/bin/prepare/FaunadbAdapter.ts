import faunadb, { query as q } from "faunadb";
import fs from "fs";

export class FaunadbAdapter {
  client: any;
  secret: string;

  constructor(secret: string) {
    this.secret = secret;
    this.client = new faunadb.Client({ secret });
  }

  async createProjectChildDb(project: string, env: string) {
    await this.client.query(
      q.CreateDatabase({
        name: `${project}-${env}`,
      })
    );
  }

  updateClientWithKeyFile(project: string, env: string) {
    const keyFile = `${project}-${env}.key.json`;
    const { secret } = JSON.parse(fs.readFileSync(keyFile).toString());
    this.secret = secret;
    this.client = new faunadb.Client({ secret });
  }

  async createKeyAndWriteKeyfile(project: string, env: string) {
    const path = `${project}-${env}.key.json`;
    if (fs.existsSync(path)) throw new Error(`File "${path}" already exists`);

    const key = await this.client.query(
      q.CreateKey({
        database: q.Database(`${project}-${env}`),
        role: "admin",
      })
    );

    fs.writeFileSync(path, JSON.stringify(key, null, 2));
  }

  async createIndexMigrationById() {
    await this.client.query(
      q.CreateIndex({
        name: "migration_by_id",
        unique: true,
        serialized: true,
        source: q.Collection("_migrations"),
        terms: [
          {
            field: ["data", "id"],
            reverse: true,
          },
        ],
      })
    );
  }
}
