import styled from 'styled-components';
import Header from '../Header/Header';
import Tabs from '../Tabs/Tabs';
import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [activeTab, setActiveTab] = useState('Popular');
  const [search, setSearch] = useState('');

  return (
    <Wrapper>
      {isHome && (
        <>
          <Header search={search} setSearch={setSearch} />
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </>
      )}
      <MainContent>
        <Outlet context={{ activeTab, search }} />
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
