// styles
import { Button } from "../styles";
// CONTEXT
import { useContext } from "react";
import countryContext from "../context/country/CountryContext";

export default function Filters() {
  const { groupBy, groupByLanguages, groupByContinents } =
    useContext(countryContext);

  return (
    <>
      <h2>Filters: {groupBy}</h2>
      <Button size="20px" padding="10px 15px" onClick={groupByContinents}>
        Continent
      </Button>
      <Button size="20px" padding="10px 15px" onClick={groupByLanguages}>
        Languages
      </Button>
    </>
  );
}
