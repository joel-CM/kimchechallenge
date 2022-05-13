import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query {
    countries {
      name
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;
