import { env } from "process";

export const fauna = {
  graphql: {
    endpoint: env.FAUNA_GRAPHQL_ENDPOINT,
  },
  keys: {
    admin: env.FAUNA_KEYS_ADMIN,
    server: env.FAUNA_KEYS_SERVER,
  },
  db: { name: "main" },
};
