import path from "path";
import { env } from "process";

export const fauna = {
  graphql: {
    endpoint: env.FAUNA_GRAPHQL_ENDPOINT,
    import: {
      endpoint: env.FAUNA_GRAPHQL_IMPORT_ENDPOINT,
    },
    schema: {
      path: path.join(process.cwd(), "src", "api", "schema.graphql"),
    },
  },
  keys: {
    admin: env.FAUNA_KEYS_ADMIN,
    server: env.FAUNA_KEYS_SERVER,
  },
  db: { name: "main" },
};
