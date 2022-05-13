// CONTEXT
import countryContext from "./context/country/CountryContext";
import { useContext, useEffect } from "react";
// components
import NavBar from "./components/Nav";
import Card from "./components/Card";
// styles
import { Container, Title } from "./styles";

export default function App() {
  const { getCountriesGroupByLanguages, countries, groupBy } =
    useContext(countryContext);

  useEffect(() => {
    getCountriesGroupByLanguages();
  }, []);

  return (
    <Container>
      <Title>Country Search</Title>
      <NavBar />
      {groupBy === "languages" && (
        <>
          {Object.keys(countries).map((lan) => (
            <>
              {lan && <h2 style={{ background: "red" }}>{lan}</h2>}
              {countries[lan].map((country) => (
                <h3>{country}</h3>
              ))}
            </>
          ))}
        </>
      )}
      {groupBy === "continents" && (
        <>
          {Object.keys(countries).map((continent) => (
            <>
              {continent && <h2 style={{ background: "red" }}>{continent}</h2>}
              {countries[continent].map((country) => (
                <h3>{country}</h3>
              ))}
            </>
          ))}
        </>
      )}
    </Container>
  );
}
