import path from "path";
import { config, env } from "process";

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
  db: { name: "main" },
};

console.log("config=========", JSON.stringify(fauna, null, 2));
