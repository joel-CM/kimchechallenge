import * as types from "./types";

export default function reducer(state, actions) {
  const { type, payload } = actions;

  switch (type) {
    case types.GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
      };
    case types.SEARCH_COUNTRIES:
      return {
        ...state,
        countries: payload,
      };
    default:
      return state;
  }
}
