import { Client, query as q } from "faunadb";

export const createDocumentMigration = async (
  client: Client,
  migration: TMigration
) => {
  const { id, name } = migration;
  await client.query(
    q.Create(q.Collection("_migrations"), { data: { id, name } })
  );
};
