import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   useQuery,
//   gql,
// } from '@apollo/client';
import App from 'components/App/App.jsx';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/test/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
