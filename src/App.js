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
  const {data, loading, error } = useQuery(COUNTRY, {
    variables: { code },
    skip: code.length !== 2
  })

  const handleChange = (e) => {
    setCode(e.target.value)
  }
  return (
    <div className="App">
      {error  && (<h1>{`You broke it ${error.message}`}</h1>)}
      {!data || loading ? (<h1>Loading...</h1>) :
          (<h1>{data.country?.name} {data.country?.emoji}</h1>)}
      <input type="text" value={code} onChange={handleChange}/>
    </div>
  );
}

export default App;
