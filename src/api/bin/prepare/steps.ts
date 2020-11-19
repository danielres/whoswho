import { query as q } from "faunadb";
import * as config from "../../config";
import { uploadSchema } from "../uploadSchema";
import { FaunadbAdapter } from "./FaunadbAdapter";

const fauna = new FaunadbAdapter(config.fauna.keys.admin);
const dbName = config.fauna.db.name;

export const steps = [
  {
    name: `create db ${dbName}`,
    action: async () => await fauna.createProjectChildDb(dbName),
  },
  {
    name: `maybe create child db admin key`,
    action: async () => await fauna.createKeyAndWriteKeyfile(dbName),
  },
  {
    name: `update fauna client to child db`,
    action: async () => await fauna.updateClientWithKeyFile(dbName),
  },
  {
    name: `create db "_migrations"`,
    action: async () =>
      await fauna.client.query(q.CreateCollection({ name: "_migrations" })),
  },
  {
    name: `create reverse index "migration_by_id"`,
    action: async () => await fauna.createIndexMigrationById(),
  },
  {
    name: `upload schema`,
    action: async () => {
      const secret = fauna.secret;
      const file = config.fauna.graphql.schema.path;
      await uploadSchema(secret, file);
    },
  },
];
