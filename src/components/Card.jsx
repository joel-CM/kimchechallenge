import { Title } from "../styles";

export default function Card({ country }) {
  return (
    <div>
      <Title size="1rem">{country}</Title>
    </div>
  );
}
