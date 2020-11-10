import './App.css';
import { useQuery, gql } from '@apollo/client';
import { useState } from  "react"

const COUNTRY = gql`
  query Country($code: ID!) {
    country( code: $code ) {
      name
      emoji
      nameWithEmoji @client
    }
  }
`;

const COUNTRIES = gql`
    query Countries {
        countries {
            code
            name 
            emoji
            nameWithEmoji @client
        }
    }
`;

function App() {
    const [code, setCode] = useState("")
    // const {data, loading, error } = useQuery(COUNTRY, {
    //   variables: { code },
    //   skip: code.length !== 2
    // })

    const {data, loading, error} = useQuery(COUNTRIES)

    const handleChange = (e) => {
        setCode(e.target.value)
    }
    return (
        <div className="App">
            {error && (<h1>{`You broke it ${error.message}`}</h1>)}
            {!data || loading ? (<h1>Loading...</h1>) : (
                <>
                    <ul>
                        {data.countries.map(country => (<li key={country.code}><h2>{country.nameWithEmoji}</h2></li>))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default App;


