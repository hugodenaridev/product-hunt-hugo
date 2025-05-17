import styled from 'styled-components';
import RatingButton from '../components/RatingButton';
import { useNavigate } from 'react-router-dom';

const placeholderProducts = [
  {
    id: 1,
    title: 'Product One',
    description: 'This is a placeholder description for product one.',
    image: 'https://via.placeholder.com/80',
  },
  {
    id: 2,
    title: 'Product Two',
    description: 'A description of product two goes here.',
    image: 'https://via.placeholder.com/80',
  },
  {
    id: 3,
    title: 'Product Three',
    description: 'Yet another placeholder product description.',
    image: 'https://via.placeholder.com/80',
  },
];

const ProductList = () => {
  const navigate = useNavigate();
  return (
    <ListContainer>
      {placeholderProducts.map((product) => (
        <ProductCard key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
          <ProductImage src={product.image} alt={product.title} />
          <ProductInfo>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDesc>{product.description}</ProductDesc>
          </ProductInfo>
          <RatingButton />
        </ProductCard>
      ))}
    </ListContainer>
  );
};

export default ProductList;

const ListContainer = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #f3f4f6;
  flex: 1;
  overflow-y: auto;
`;

const ProductCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1rem;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #f9fafb;
  }
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1rem;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #111827;
`;

const ProductDesc = styled.p`
  margin: 0.25rem 0 0 0;
  font-size: 0.9rem;
  color: #6b7280;
`;
