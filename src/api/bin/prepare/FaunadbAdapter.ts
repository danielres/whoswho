import faunadb, { query as q } from "faunadb";
import fs from "fs";

export class FaunadbAdapter {
  client: any;
  secret: string;

  constructor(secret: string) {
    this.secret = secret;
    this.client = new faunadb.Client({ secret });
  }

  async createProjectChildDb(dbName: string) {
    await this.client.query(
      q.CreateDatabase({
        name: dbName,
      })
    );
  }

  updateClientWithKeyFile(dbName: string) {
    const keyFile = `${dbName}.key.json`;
    const { secret } = JSON.parse(fs.readFileSync(keyFile).toString());
    this.secret = secret;
    this.client = new faunadb.Client({ secret });
  }

  async createKeyAndWriteKeyfile(dbName: string) {
    const path = `${dbName}.key.json`;
    if (fs.existsSync(path)) throw new Error(`File "${path}" already exists`);

    const key = await this.client.query(
      q.CreateKey({
        database: q.Database(dbName),
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
