// style
import { Title, Box } from "../styles";
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
            <Box key={lan}>
              {lan && (
                <Title as="h2" margin="0px 0px 21.44px 0px">
                  {lan}
                </Title>
              )}
              {countries[lan].map((country) => (
                <CountryCard key={country.name} {...country} />
              ))}
            </Box>
          ))}
        </>
      )}
      {groupBy === "continents" && (
        <>
          {Object.keys(countries).map((continent) => (
            <Box key={continent}>
              {continent && (
                <Title as="h2" margin="0px 0px 21.44px 0px">
                  {continent}
                </Title>
              )}
              {countries[continent].map((country) => (
                <CountryCard key={"1_" + country.name} {...country} />
              ))}
            </Box>
          ))}
        </>
      )}
      {!Object.keys(countries).length && (
        <Title as="span">No country found...</Title>
      )}
    </>
  );
}
