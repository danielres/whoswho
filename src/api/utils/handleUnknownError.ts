import { reportError } from "./reportError";

export const handleUnknownError = (res, prefix) => (error) => {
  const status = 500;
  const { id } = reportError({ prefix, error, status });

  return res.status(status).json({
    code: error.code,
    error: error.message,
    id,
    status,
  });
};
