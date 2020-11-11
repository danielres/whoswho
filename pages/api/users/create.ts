import { User } from "src/api/graphql/queries";

export default async (req, res) => {
  const rand = Math.floor(Math.random() * 1000);
  const tempData = { name: `Rand-${rand}`, email: `rand${rand}@example.com` };

  try {
    const result = await User.create(tempData);
    res.json(result);
  } catch (error) {
    console.error(error);
  }
};
