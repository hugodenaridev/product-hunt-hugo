import styled from 'styled-components';
import RatingButton from '../../components/RatingButton/RatingButton';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { fetchPopularProducts } from '../../hooks/fetchPopularProducts';
import { fetchNewestProducts } from '../../hooks/fetchNewestProducts';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';

const ProductList = () => {
  const navigate = useNavigate();
  const { activeTab, search } = useOutletContext<{ activeTab: string, search: string }>();

  const [selectedRatings, setSelectedRatings] = useState<{ [id: string]: boolean }>({});

  const isPopular = activeTab === 'Popular';
  const queryKey = isPopular ? ['popularProducts'] : ['newestProducts'];
  const queryFn = isPopular ? fetchPopularProducts : fetchNewestProducts;

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error
  } = useInfiniteQuery({
    queryKey: [queryKey, activeTab],
    queryFn,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: null,
    enabled: true,
  });

  const posts = data ? data.pages.flatMap(page => page.posts) : [];
  const filteredPosts = search
    ? posts.filter(post =>
        post.name.toLowerCase().includes(search.toLowerCase()) ||
        post.tagline.toLowerCase().includes(search.toLowerCase())
      )
    : posts;

  const handleRatingClick = (id: string) => {
    setSelectedRatings(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <ListContainer>
        {filteredPosts.length === 0 && status !== 'pending' && (
          <div style={{ textAlign: 'center', color: '#aaa', marginTop: '2rem' }}>
            No products found.
          </div>
        )}
        {filteredPosts.map((post) => (
          <ProductCard key={post.id} onClick={() => navigate(`/product/${post.id}`, { state: { product: post } })}>
            <div style={{ display: "flex", gap: "20px" }}>
              <ProductImage src={post.thumbnail.url} alt={post.name} />
              <ProductInfo>
                <ProductTitle>{post.name}</ProductTitle>
                <ProductDesc>{post.tagline}</ProductDesc>
              </ProductInfo>
            </div>
            <RatingButton
              count={post.votesCount}
              selected={!!selectedRatings[post.id]}
              onClick={() => handleRatingClick(post.id)}
            />
          </ProductCard>
        ))}
      </ListContainer>
      {hasNextPage && (
        <ButtonWrapper>
          <LoadMoreButton onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? 'Loading more...' : 'Load more'}
          </LoadMoreButton>
        </ButtonWrapper>
      )}
      {status === 'pending' && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
    </>
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0 60px 0;
`;

const LoadMoreButton = styled.button`
  background: linear-gradient(90deg, #ff9800 0%, #ff5722 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(255, 152, 0, 0.15);
  transition: background 0.2s, transform 0.1s;
  margin-top: 16px;

  &:hover:not(:disabled) {
    background: linear-gradient(90deg, #ffb74d 0%, #ff7043 100%);
    transform: translateY(-2px) scale(1.03);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
