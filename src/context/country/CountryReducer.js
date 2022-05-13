import * as types from "./types";
import { groupByLanguages, groupByContinents } from "../../assets/groupBy";

export default function reducer(state, actions) {
  const { type, payload } = actions;

  if (type === types.GET_COUNTRIES) {
    let res;
    if (state.groupBy === "languages") {
      res = groupByLanguages(payload);
    } else {
      res = groupByContinents(payload);
    }
    console.log("group by", state.groupBy);
    console.log(res);
    return {
      ...state,
      countries: res,
    };
  }

  if (type === types.SEARCH_COUNTRIES) {
    let res;
    if (state.groupBy === "languages") {
      res = groupByLanguages(payload);
    } else {
      res = groupByContinents(payload);
    }
    return {
      ...state,
      countries: res,
    };
  }

  if (type === types.GROUP_BY_LANGUAGES) {
    const res = groupByLanguages(payload);
    return {
      ...state,
      groupBy: "languages",
      countries: res,
    };
  }

  if (type === types.GROUP_BY_CONTINENTS) {
    const res = groupByContinents(payload);
    console.log(res);
    return {
      ...state,
      groupBy: "continents",
      countries: res,
    };
  }

  return state;
}
