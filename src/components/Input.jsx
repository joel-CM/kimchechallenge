// styles
import { Input as InputElement, SearchContainer, SearchIcon } from "../styles";
// CONTEXT
import { useContext } from "react";
import countryContext from "../context/country/CountryContext";

export default function Input() {
  const { searchCountry } = useContext(countryContext);

  const handleCountrySearch = (e) => {
    searchCountry(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchIcon />
      <InputElement
        type="text"
        placeHolder="Click to search"
        onChange={handleCountrySearch}
      />
    </SearchContainer>
  );
}
