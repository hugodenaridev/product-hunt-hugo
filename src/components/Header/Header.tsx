import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import type { Dispatch, SetStateAction } from 'react';

const Header = ({ search, setSearch }: { search: string; setSearch: Dispatch<SetStateAction<string>> }) => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });

  return (
    <HeaderContainer>
      <Avatar src="https://avatar.iran.liara.run/public/17" alt="User Avatar" />
      <DateText>{today}</DateText>
      <SearchWrapper>
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </SearchWrapper>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const DateText = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: #374151;
  width: 80%;
  text-align: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #f3f4f6;
  border-radius: 8px;
  padding: 0 0.5rem;
`;

const SearchIcon = styled.div`
  font-size: 1rem;
  color: #6b7280;
  cursor: pointer;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  font-size: 1rem;
  padding: 0.5rem;
  width: 140px;
  color: #111827;
`;
