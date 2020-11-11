import { env } from "process";

export const fauna = {
  graphql: {
    endpoint: env.FAUNA_GRAPHQL_ENDPOINT,
  },
  admin: { key: env.FAUNA_ADMIN_KEY },
  keys: { server: env.FAUNA_KEYS_SERVER },
  db: { name: "main" },
};
