import * as config from "../config";

export const get = (path) => async () => {
  const res = await fetch(`${config.api.url}${path}`);
  if (res.ok) return res.json();
  handleFailedResponse(res);
};

export const post = (path) => async (values) => {
  const res = await fetch(`${config.api.url}${path}`, {
    method: "POST",
    body: JSON.stringify(values),
  });

  if (res.ok) return res.json();

  if (res.status === 409) throw new Error("Resource already exists");
  handleFailedResponse(res);
};

const handleFailedResponse = async (res) => {
  let error;

  try {
    error = (await res.json()).error;
  } catch (_) {
    error = `${res.status}: ${res.statusText}`;
  } finally {
    console.error(error);
    throw new Error(error);
  }
};
