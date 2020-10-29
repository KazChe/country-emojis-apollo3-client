import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from '@apollo/client';

const COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      emoji
    }
  }
`;

function App() {
  const {data, loading, error } = useQuery(COUNTRY, {
    variables: {code: "CH"},
  })

  return (
    <div className="App">
      {error  && (<h1>{`You broke it ${error.message}`}</h1>)}
      {loading ? (<h1>Loading...</h1>) : (<h1>{data.country.name} {data.country.emoji}</h1>)}
    </div>
  );
}

export default App;
