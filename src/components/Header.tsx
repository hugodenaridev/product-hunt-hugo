import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });

  return (
    <HeaderContainer>
      <Avatar src="https://avatar.iran.liara.run/public/17" alt="User Avatar" />
      <DateText>{today}</DateText>
      <SearchIcon>
        <FaSearch />
      </SearchIcon>
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
  justify-content: space-between;
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
  flex: 1;
  text-align: center;
`;

const SearchIcon = styled.div`
  font-size: 1rem;
  color: #6b7280;
  cursor: pointer;
`;
