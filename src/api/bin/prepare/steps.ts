import { query as q } from "faunadb";
import * as config from "../../config";
import { uploadSchema } from "../uploadSchema";
import { FaunadbAdmin } from "./FaunadbAdmin";

const fauna = new FaunadbAdmin(config.fauna.keys.admin);

export const steps = [
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
