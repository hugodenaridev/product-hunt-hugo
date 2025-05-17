import styled from 'styled-components';
import Header from './Header';
import Tabs from './Tabs';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <Wrapper>
      {isHome && (
        <>
          <Header />
          <Tabs />
        </>
      )}
      <MainContent>
        <Outlet />
      </MainContent>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
`;
