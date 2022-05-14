import { Title, Card, List, Item } from "../styles";

export default function CountryCard(country) {
  return (
    <Card>
      <Title as={"h2"} size="1rem" margin="16px">
        {country.code} - {country.name}
      </Title>
      <List>
        <Item>Continent: {country.continent.name}</Item>
        <Item>Capital: {country.capital}</Item>
        <Item>Phone: {country.phone}</Item>
        <Item>Native: {country.native}</Item>
        <Item>
          Languages: {country.languages.map(({ name }) => name + ", ")}
        </Item>
      </List>
    </Card>
  );
}
