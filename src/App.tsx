import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail';
import Layout from './components/Layout/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    background: #f3f4f6;
    color: #111827;
  }
`;

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <GlobalStyle />
        <AppWrapper>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ProductList />} />
            </Route>
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </AppWrapper>
      </Router>
    </QueryClientProvider>
  );
};

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export default App;
