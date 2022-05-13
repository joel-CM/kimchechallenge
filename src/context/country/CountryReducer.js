import * as types from "./types";

export default function reducer(state, actions) {
  const { type, payload } = actions;

  switch (type) {
    case types.GET_COUNTRIES:
      let allLanguagess = [];
      payload.forEach((c) => {
        c.languages.forEach((lan) => allLanguagess.push(lan.name));
      });
      allLanguagess = [...new Set(allLanguagess)];

      const lanObjj = {};
      allLanguagess.forEach((lan) => {
        lanObjj[lan] = [];
      });

      payload.forEach((c) => {
        c.languages.forEach((lan) => {
          lanObjj[lan.name].push(c.name);
        });
      });
      console.log(lanObjj);
      return {
        ...state,
        countries: lanObjj,
      };
    case types.SEARCH_COUNTRIES:
      return {
        ...state,
        countries: payload,
      };
    case types.GROUP_BY_LANGUAGES:
      return {
        ...state,
        groupBy: "languages",
      };
    case types.GROUP_BY_CONTINENTS:
      return {
        ...state,
        groupBy: "continents",
      };
    default:
      return state;
  }
}
