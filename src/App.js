// CONTEXT
import countryContext from "./context/country/CountryContext";
import { useContext, useEffect } from "react";
// components
import NavBar from "./components/Nav";
import Card from "./components/Card";
// styles
import { Container, Title } from "./styles";

export default function App() {
  const { getCountries, countries } = useContext(countryContext);

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <Container>
      <Title>Country Search</Title>
      <NavBar />
      {countries?.map(({ name }) => (
        <Card key={name} country={name} />
      ))}
    </Container>
  );
}
