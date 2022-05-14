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
    countries: {},
    groupBy: "languages",
  };

  const [state, dispatch] = useReducer(CountryReducer, initialState);

  // ############### actions ###############
  const getCountriesGroupByLanguages = async () => {
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
      if (c.name.toLowerCase().includes(country.toLowerCase())) return c;
    });
    dispatch({
      type: types.SEARCH_COUNTRIES,
      payload: res,
    });
  };
  const groupByLanguages = async () => {
    const { data } = await client.query({
      query: apolloQueries.GET_COUNTRIES,
    });
    dispatch({
      type: types.GROUP_BY_LANGUAGES,
      payload: data.countries,
    });
  };
  const groupByContinents = async () => {
    const { data } = await client.query({
      query: apolloQueries.GET_COUNTRIES,
    });
    dispatch({
      type: types.GROUP_BY_CONTINENTS,
      payload: data.countries,
    });
  };

  return (
    <CountryContext.Provider
      value={{
        countries: state.countries,
        getCountriesGroupByLanguages,
        searchCountry,
        groupBy: state.groupBy,
        groupByLanguages,
        groupByContinents,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default UserState;
