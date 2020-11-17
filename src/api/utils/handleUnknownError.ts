import { reportError } from "./reportError";
import { NextApiRequest, NextApiResponse } from "next";

export const handleUnknownError = (res: NextApiResponse, prefix: string) => (
  error: any
) => {
  const status = 500;
  const { id } = reportError({ prefix, error, status });

  return res.status(status).json({
    code: error.code,
    error: error.message,
    id,
    status,
  });
};
