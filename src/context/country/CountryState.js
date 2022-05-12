// CONTENT
import { useReducer } from "react";
import CountryReducer from "./CountryReducer";
import CountryContext from "./CountryContext";
import * as types from "./types";
// APOLLO
import * as apolloQueries from "../../apollo/querys";
import client from "../../apollo/apolloClient";

const UserState = (props) => {
  const initialState = {
    countries: [],
  };

  const [state, dispatch] = useReducer(CountryReducer, initialState);

  // actions
  const getCountries = async () => {
    const res = await client.query({
      query: apolloQueries.GET_COUNTRIES,
    });
    dispatch({
      type: types.GET_COUNTRIES,
      payload: res.data.countries,
    });
  };
  const searchCountry = async (country) => {
    const { data } = await client.query({
      query: apolloQueries.GET_COUNTRIES,
    });
    const res = data.countries.filter((c) => {
      if (c.name.includes(country)) return c;
    });
    dispatch({
      type: types.SEARCH_COUNTRIES,
      payload: res,
    });
  };

  return (
    <CountryContext.Provider
      value={{
        countries: state.countries,
        getCountries,
        searchCountry,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default UserState;
