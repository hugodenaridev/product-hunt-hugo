import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          Back
        </BackButton>
      </Header>
      <Content>
        <ImagePreview>
          <img src="https://via.placeholder.com/600x300" alt="Product screenshot" />
        </ImagePreview>
        <ProductCard>
          <ProductHeader>
            <ProductIcon>
              <img src="https://via.placeholder.com/60" alt="icon" />
            </ProductIcon>
            <ProductInfo>
              <ProductTitle>Uizard</ProductTitle>
              <ProductLabel>IPHONE</ProductLabel>
            </ProductInfo>
          </ProductHeader>
          <Description>
            Uizard allows you to transform your wireframes into prototypes — automatically.
            Test your ideas in seconds, create high-fidelity prototypes, export front-end code, customize styleguides, export to Sketch, iterate fast!
          </Description>
          <Meta>
            <Tag>#2 Product of the Day</Tag>
            <Date>2 days ago</Date>
          </Meta>
        </ProductCard>
      </Content>
      <Spacer />
      <ActionBar>
        <GetItButton>
          Get it
        </GetItButton>
        <UpvoteButton>
          Upvote
        </UpvoteButton>
      </ActionBar>
    </Container>
  );
};

export default ProductDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f3f4f6;
  padding-bottom: 6rem;
`;


const Header = styled.div`
  padding: 1rem 2rem;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
`;

const ImagePreview = styled.div`
  border-radius: 16px;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ProductCard = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    background-color: #f9fafb;
  }
`;

const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProductIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`;

const ProductLabel = styled.span`
  font-size: 0.8rem;
  color: #6b7280;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #374151;
  line-height: 1.6;
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: #6b7280;
`;

const Tag = styled.span`
  font-weight: 600;
  color: #10b981;
`;

const Date = styled.span`
  font-size: 0.85rem;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const ActionBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 2rem;
  border-top: 1px solid #e5e7eb;
  background-color: #f3f4f6;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
`;

const GetItButton = styled.button`
  flex: 0.2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #ffffff;
  color: #111827;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem;
  border: 2px solid #d1d5db;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f9fafb;
  }
`;

const UpvoteButton = styled.button`
  flex: 0.2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #f97316;
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem;
  border: 2px solid #f97316;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ea580c;
  }
`;
