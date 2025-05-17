import styled from "styled-components";

const RatingButton = ({ count = Math.floor(Math.random() * 100), onClick }: { count?: number, onClick?: () => void }) => {
  return (
    <Wrapper onClick={onClick}>
      <Arrow>▲</Arrow>
      <Count>{count}</Count>
    </Wrapper>
  );
};

export default RatingButton;

const Wrapper = styled.button`
  background-color: #f97316; // orange (similar to image)
  color: white;
  border: none;
  border-radius: 12px;
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ea580c;
  }
`;

const Arrow = styled.span`
  font-size: 1.25rem;
  line-height: 1;
`;

const Count = styled.span`
  font-size: 0.85rem;
  line-height: 1;
`;
