import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from '@apollo/client';

const COUNTRY = gql`
  {
    country(code: "DE") {
      name
      emoji
    }
  }
`;

function App() {
  const {data, loading, error } = useQuery(COUNTRY)

  return (
    <div className="App">
      {error && <h1>{`You broke it ${error.message}`}</h1>}
      {loading ? (<h1>Loading...</h1>) : (<h1>{data.country.name} {data.country.emoji}</h1>)}
    </div>
  );
}

export default App;
