// styles
import { Input as InputElement, SearchContainer, SearchIcon } from "../styles";

export default function Input() {
  return (
    <SearchContainer>
      <SearchIcon />
      <InputElement type="text" placeHolder="Click to search" />
    </SearchContainer>
  );
}
