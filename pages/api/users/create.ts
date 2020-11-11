import { User } from "src/api/graphql/queries";

export default async (req, res) => {
  try {
    const result = await User.create(JSON.parse(req.body));
    res.json(result);
  } catch (error) {
    console.error({ error: error.message });
    res.json({ error: error.message });
  }
};
