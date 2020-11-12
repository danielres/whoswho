import { gql } from "graphql-request";
import { graphQLClient } from "./client";

export const create = async (vars) => {
  const data = {
    ...vars,
    createdAt: new Date().toISOString(),
  };

  const query = gql`
    mutation CreateUser($data: UserInput!) {
      createUser(data: $data) {
        name
        email
        createdAt
      }
    }
  `;

  try {
    const response = await graphQLClient.request(query, { data });
    return response.createUser;
  } catch (error) {
    throw new Error(error.response.errors[0].extensions.code);
  }
};

export const list = async () => {
  const query = gql`
    {
      allUsers {
        data {
          name
          email
          createdAt
          photo {
            url
          }
        }
      }
    }
  `;

  const response = await graphQLClient.request(query);
  return response.allUsers.data;
};
