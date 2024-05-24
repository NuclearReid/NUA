import './App.css'
import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, {headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  
  return (
    <ApolloProvider client={client}>
      <NavBar className='container-fluid mb-3'/>
      <div className='outletStyle' >
        <Outlet />
      </div>
      <Footer />
    </ApolloProvider>
  )
}

export default App
