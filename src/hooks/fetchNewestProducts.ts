export const fetchNewestProducts = async ({ pageParam = null }) => {
    const response = await fetch('https://api.producthunt.com/v2/api/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_DEV_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          query GetNewest($after: String) {
            posts(first: 10, order: NEWEST, after: $after) {
              pageInfo {
                endCursor
                hasNextPage
              }
              edges {
                node {
                  id
                  name
                  tagline
                  url
                  votesCount
                  thumbnail { url }
                }
              }
            }
          }
        `,
        variables: {
          after: pageParam
        }
      }),
    });
  
    const data = await response.json();
    if (data.errors) {
      throw new Error(data.errors.map((e: { message: any; }) => e.message).join(', '));
    }
    const postsData = data.data.posts;
    return {
      posts: postsData.edges.map((edge: { node: any; }) => edge.node),
      nextCursor: postsData.pageInfo.hasNextPage ? postsData.pageInfo.endCursor : null
    };
  };
  