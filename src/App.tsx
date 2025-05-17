import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Layout from './components/Layout';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    background: #f3f4f6;
    color: #111827;
  }
`;

const App = () => {
  return (
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
  );
};

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export default App;
