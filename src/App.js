import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./apollo/querys";
// styles
import { Title } from "./styles/Title";

function App() {
  const { error, loading, data } = useQuery(GET_COUNTRIES);

  return (
    <div className="app">
      <Title right size color="#ddee77">
        hello world | {data?.countries.length} countries
      </Title>
      {data?.countries.map(({ name }) => (
        <li key={name}>{name}</li>
      ))}
    </div>
  );
}

export default App;
