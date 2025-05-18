import type { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface TabsProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const Tabs = ({ activeTab, setActiveTab }: TabsProps) => {
  return (
    <TabsContainer>
      <Tab
        active={activeTab === 'Popular'}
        onClick={() => setActiveTab('Popular')}
      >
        Popular
      </Tab>
      <Tab
        active={activeTab === 'Newest'}
        onClick={() => setActiveTab('Newest')}
      >
        Newest
      </Tab>
    </TabsContainer>
  );
};

export default Tabs;

const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
`;

const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 1rem;
  background: none;
  border: none;
  border-bottom: 3px solid ${({ active }) => (active ? '#EF4444' : 'transparent')};
  color: ${({ active }) => (active ? '#EF4444' : '#6B7280')};
  font-size: 1rem;
  font-weight: ${({ active }) => (active ? '600' : '400')};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #ef4444;
    border-bottom: 3px solid #ef4444;
  }
`;
