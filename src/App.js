// CONTEXT
import countryContext from "./context/country/CountryContext";
import { useContext, useEffect } from "react";
// components
import NavBar from "./components/Nav";
import Countries from "./components/Countries";
import Card from "./components/CountryCard";
// styles
import { Container, Title } from "./styles";

export default function App() {
  const { getCountriesGroupByLanguages, countries } =
    useContext(countryContext);

  useEffect(() => {
    getCountriesGroupByLanguages();
  }, []);

  return (
    <Container>
      <Title>Country Search</Title>
      <NavBar />
      <Countries />
    </Container>
  );
}
