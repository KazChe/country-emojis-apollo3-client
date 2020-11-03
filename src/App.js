import './App.css';
import { useQuery, gql } from '@apollo/client';
import { useState } from  "react"

const COUNTRY = gql`
  query Country($code: ID!) {
    country( code: $code ) {
      name
      emoji
    }
  }
`;

function App() {
  const [ code, setCode] = useState("")
  const data = Feed(code)
  const handleChange = (e) => {
    setCode(e.target.value)
  }
  return (
    <div className="App">
      { !data ? <h1>Loading...</h1> :
          (<h1>{data.country?.name} {data.country?.emoji}</h1>)}
      <input type="text" value={code} onChange={handleChange}/>
    </div>
  );
}

function Feed(code) {
  const {loading, error, data} = useQuery(COUNTRY, {
    variables: { code },
    skip: code.length !== 2
  })
  if (error) return error;
  if (loading || !data ) return "Loading...";

  return data;
}

export default App;
