import path from "path";
import { env } from "process";

export const project = {
  name: env.PROJECT_NAME,
};

export const fauna = {
  graphql: {
    endpoint: String(env.FAUNA_GRAPHQL_ENDPOINT),
    import: {
      endpoint: String(env.FAUNA_GRAPHQL_IMPORT_ENDPOINT),
    },
    schema: {
      path: path.join(process.cwd(), "src", "api", "schema.graphql"),
    },
  },
  keys: {
    admin: String(env.FAUNA_KEYS_ADMIN),
    server: String(env.FAUNA_KEYS_SERVER),
  },
};
