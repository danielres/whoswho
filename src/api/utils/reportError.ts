import { shortId } from "src/api/utils/shortId";

export const reportError = ({ prefix, error, status }) => {
  const id = shortId();
  console.error(
    `${prefix} Error ${status}:`,
    error.message,
    "|",
    id,
    new Date()
  );
  return { id };
};
