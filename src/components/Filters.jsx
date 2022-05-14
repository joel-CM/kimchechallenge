// styles
import {
  Button,
  Title,
  FilterContainer,
  Box,
  Text,
  GroupByIcon,
} from "../styles";
// CONTEXT
import { useContext } from "react";
import countryContext from "../context/country/CountryContext";

export default function Filters() {
  // countryContext properties
  const {
    groupBy: groupedBy,
    groupByLanguages,
    groupByContinents,
  } = useContext(countryContext);

  return (
    <FilterContainer>
      <Box flex align="center" justify="center">
        <Title as="h2" margin="30px 10px">
          Group By:{" "}
        </Title>
        <Text size="32px">{groupedBy}</Text>
      </Box>
      <Box>
        <Button size="20px" padding="10px 15px" onClick={groupByContinents}>
          Continent
          <GroupByIcon />
        </Button>
        <Button size="20px" padding="10px 15px" onClick={groupByLanguages}>
          Languages
          <GroupByIcon />
        </Button>
      </Box>
    </FilterContainer>
  );
}
