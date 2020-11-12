import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/",
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
              fields: {
                  country: {
                      read: (existing, {toReference, args}) => {
                          const countryRef = toReference({__typename: "Country", code: args.code})
                          return existing ?? countryRef // Nullish Coalescing Operator (??)
                      }
                  }
              }
            },
            Country: {
                keyFields: ['code'],
                fields: {
                    nameWithEmoji: {
                        read: (_, {readField}) => {
                          const  name = readField("name")
                          const  emoji = readField("emoji")
                          return `${name} ${emoji}`
                        }
                    }

                }
            }
        }
    })
})

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
