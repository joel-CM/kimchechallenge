// style
import { Title } from "../styles";
// components
import CountryCard from "./CountryCard";
// CONTEXT
import { useContext } from "react";
import countryContext from "../context/country/CountryContext";

export default function Countries() {
  const { groupBy, countries } = useContext(countryContext);

  return (
    <>
      {groupBy === "languages" && (
        <>
          {Object.keys(countries).map((lan) => (
            <div key={lan}>
              {lan && <Title as="h2">{lan}</Title>}
              {countries[lan].map((country) => (
                <CountryCard key={country.name} {...country} />
              ))}
            </div>
          ))}
        </>
      )}
      {groupBy === "continents" && (
        <>
          {Object.keys(countries).map((continent) => (
            <div key={continent}>
              {continent && <Title as="h2">{continent}</Title>}
              {countries[continent].map((country) => (
                <CountryCard key={"1_" + country.name} {...country} />
              ))}
            </div>
          ))}
        </>
      )}
    </>
  );
}
