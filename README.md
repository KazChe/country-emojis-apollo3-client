# React app, using apollo3 client, given a country code get name and flag emoji

To explore cache policies, reactive variables ...

using available API at https://countries.trevorblades.com/

Following docs at https://www.apollographql.com/docs/react/ v3


Initial set up of Apoll33 client in index.js

```
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
       uri: "https://countries.trevorblades.com/",
       cache: new InMemoryCache()
   })
   ReactDOM.render(
     <React.StrictMode>
         <ApolloProvider client={client}>
           <App />
         </ApolloProvider>
     </React.StrictMode>,
     document.getElementById('root')
   );
```

