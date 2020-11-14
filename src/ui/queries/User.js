import * as api from "./api";

export const create = api.post("/users");
export const list = api.get("/users");
