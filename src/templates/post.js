import React from 'react';
import { graphql } from 'gatsby';

const PostTemplate = ({ data }) => {
  const post = data.allPosts.nodes[0];

  return (
    <>
      <h1>{post.title}</h1>
      <p>
        <strong>Written by {post.author}</strong>
      </p>
      <p>{post.content}</p>
    </>
  );
};

export default PostTemplate;

export const postQuery = graphql`
  query Post($id: String) {
    allPosts(filter: { id: { eq: $id } }) {
      nodes {
        ...PostInfo
        content
      }
    }
  }
`;
