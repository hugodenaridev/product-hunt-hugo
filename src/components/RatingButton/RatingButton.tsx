import styled from "styled-components";

const RatingButton = ({ count, selected = false, onClick }: { count?: number, selected?: boolean, onClick?: (e: React.MouseEvent) => void }) => {
  return (
    <Wrapper
      selected={selected}
      onClick={e => { e.stopPropagation(); onClick?.(e); }}
    >
      <Arrow>▲</Arrow>
      <Count>{count}</Count>
    </Wrapper>
  );
};

export default RatingButton;

const Wrapper = styled.button<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? '#f97316' : '#fff')};
  color: ${({ selected }) => (selected ? '#fff' : '#111')};
  border: 1.5px solid ${({ selected }) => (selected ? '#f97316' : '#e5e7eb')};
  border-radius: 12px;
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border 0.2s;

  &:hover {
    background-color: #f97316;
    color: #fff;
    border: 1.5px solid #f97316;
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