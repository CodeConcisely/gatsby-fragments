import React from 'react';
import { graphql, Link } from 'gatsby';

const IndexPage = ({ data }) => {
  const posts = data.allPosts.nodes;

  return (
    <>
      <h1>Fragments Demo Project</h1>
      <nav>
        <ul>
          {posts.map(post => {
            return (
              <li key={post.id}>
                {<Link to={`posts/${post.id}`}>{post.title}</Link>} by {post.author}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default IndexPage;

export const postsQuery = graphql`
  query Posts {
    allPosts {
      nodes {
        id
        ...PostInfo
      }
    }
  }
`;
