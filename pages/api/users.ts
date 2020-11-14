import { User } from "src/api/graphql/queries";
import { Crud } from "src/api/utils/Crud";

const crud = new Crud(User);

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      return crud.list(req, res);

    case "POST":
      return crud.create(req, res);

    default:
      return res.status(500).json({
        error: `Method ${req.method} not supported on this resource.`,
      });
  }
};
