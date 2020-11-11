import * as config from "../config";

export const list = async () =>
  fetch(`${config.api.url}/users`).then((res) => res.json());

export const create = async (values) =>
  fetch(`${config.api.url}/users/create`, {
    method: "POST",
    body: JSON.stringify(values),
  }).then((res) => res.json());
