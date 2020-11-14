import { handleUnknownError } from "src/api/utils/handleUnknownError";

export class Crud {
  Resource: any;

  constructor(Resource) {
    this.Resource = Resource;
  }

  async create(req, res) {
    try {
      const result = await this.Resource.create(JSON.parse(req.body));
      return res.status(201).json(result);
    } catch (error) {
      const { code, message } = error;

      switch (error.message) {
        case "instance not unique":
          return res.status(409).json({ code, error: message });

        default:
          return handleUnknownError(res, "users/create")(error);
      }
    }
  }

  async list(req, res) {
    return res.json(await this.Resource.list());
  }
}
