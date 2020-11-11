import { User } from "src/api/graphql/queries";

export default async (req, res) => {
  res.json(await User.list());
};
