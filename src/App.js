// CONTEXT
import countryContext from "./context/country/CountryContext";
import { useContext, useEffect } from "react";
// components
import Card from "./components/Card";
import Input from "./components/Input";
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
      <Input />
      {countries?.map(({ name }) => (
        <Card key={name} country={name} />
      ))}
    </Container>
  );
}
