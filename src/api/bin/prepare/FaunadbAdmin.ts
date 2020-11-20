import faunadb, { query as q } from "faunadb";
import fs from "fs";

export class FaunadbAdmin {
  client: any;
  secret: string;

  constructor(secret: string) {
    this.secret = secret;
    this.client = new faunadb.Client({ secret });
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
