import * as config from "../config";

export const list = async () =>
  fetch(`${config.api.url}/users`).then((res) => res.json());
