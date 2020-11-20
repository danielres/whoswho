module.exports = {
  NODE_ENV: process.env.NODE_ENV ? process.env.NODE_ENV : "development",
  PROJECT_NAME: "whoswho",
  FAUNA_GRAPHQL_ENDPOINT: "https://graphql.fauna.com/graphql",
  FAUNA_GRAPHQL_IMPORT_ENDPOINT: `https://graphql.fauna.com/import`,
  FAUNA_KEYS_SERVER: "changeme",
  FAUNA_KEYS_ADMIN: "changeme",
};
