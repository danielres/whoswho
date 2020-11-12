import * as config from "../config";

export const list = async () =>
  fetch(`${config.api.url}/users`).then((res) => res.json());

export const create = async (values) =>
  fetch(`${config.api.url}/users/create`, {
    method: "POST",
    body: JSON.stringify(values),
  })
    .then((res) => {
      if (res.ok) return res;
      switch (res.status) {
        case 409:
          throw new Error("User already exists");
        default:
          throw new Error(`Unknown error. Code: ${res.status}`);
      }
    })
    .then((res) => res.json());
