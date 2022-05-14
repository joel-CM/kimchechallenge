// style
import { Title, Box } from "../styles";
// components
import CountryCard from "./CountryCard";
// CONTEXT
import { useContext } from "react";
import countryContext from "../context/country/CountryContext";

export default function Countries() {
  // countryContext properties
  const { groupBy: groupedBy, countries } = useContext(countryContext);
  // groupedBy = languages or continents

  // if(groupedBy = languages)
  // countries = {
  //    Catalan: Array(2),
  //    Arabic: Array(25),
  //    Pashto: Array(1),
  //    ...
  // }

  // if(groupedBy = continents)
  // countries = {
  //    Africa: (58) [{…}, {…}, {…}]
  //    Antarctica: (5) [{…}, {…}, {…}, {…}, {…}]
  //    Asia: (52) [{…}, {…}, {…}]
  //    ...
  // }

  return (
    <>
      {groupedBy === "languages" && (
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
      {groupedBy === "continents" && (
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
