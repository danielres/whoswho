import { User } from "src/api/graphql/queries";
import { reportError } from "src/api/utils/reportError";

export default async (req, res) => {
  try {
    const result = await User.create(JSON.parse(req.body));
    res.status(201).json(result);
  } catch (error) {
    const status = 409;
    const prefix = "[/api/users/create]";
    const { id } = reportError({ prefix, error, status });

    res.status(status).json({
      code: error.code,
      error: error.message,
      id,
      status,
    });
  }
};
