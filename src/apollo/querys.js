import { gql } from "@apollo/client";

// all queries
export const GET_COUNTRIES = gql`
  query {
    countries {
      name
      code
      capital
      native
      phone
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;
