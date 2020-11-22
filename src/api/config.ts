import path from "path";
import { env } from "process";

export const project = {
  name: env.PROJECT_NAME,
};

export const fauna = {
  graphql: {
    endpoint: env.FAUNA_GRAPHQL_ENDPOINT
      ? env.FAUNA_GRAPHQL_ENDPOINT
      : "https://graphql.fauna.com/graphql",
    import: {
      endpoint: env.FAUNA_GRAPHQL_IMPORT_ENDPOINT
        ? env.FAUNA_GRAPHQL_IMPORT_ENDPOINT
        : "https://graphql.fauna.com/import",
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
