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
      if (c.name.includes(country)) return c;
    });
    let allLanguages = [];
    res.forEach((c) => {
      c.languages.forEach((lan) => allLanguages.push(lan.name));
    });
    allLanguages = [...new Set(allLanguages)];

    const lanObj = {};
    allLanguages.forEach((lan) => {
      lanObj[lan] = [];
    });

    res.forEach((c) => {
      c.languages.forEach((lan) => {
        lanObj[lan.name].push(c.name);
      });
    });
    dispatch({
      type: types.SEARCH_COUNTRIES,
      payload: lanObj,
    });
  };
  const groupByLanguages = () => {
    dispatch({
      type: types.GROUP_BY_LANGUAGES,
    });
  };
  const groupByContinents = () => {
    dispatch({
      type: types.GROUP_BY_CONTINENTS,
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
