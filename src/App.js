// CONTEXT
import countryContext from "./context/country/CountryContext";
import { useContext, useEffect } from "react";
// components
import NavBar from "./components/Nav";
import Countries from "./components/Countries";
// styles
import { Container, Title } from "./styles";

export default function App() {
  const { getCountries, countries } =
    useContext(countryContext);

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <Container>
      <Title margin="40px 0px" size="3rem">
        Country Search
      </Title>
      <NavBar />
      <Countries />
    </Container>
  );
}
