import * as config from "../../config";
import { uploadSchema } from "../uploadSchema";

export const migrations = [
  {
    id: 1,
    name: `upload schema`,
    action: async () => {
      const secret = config.fauna.keys.admin;
      const file = config.fauna.graphql.schema.path;
      await uploadSchema(secret, file);
    },
  },
];
