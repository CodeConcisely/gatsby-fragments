import { graphql } from 'gatsby';

export const fragment = graphql`
  fragment PostInfo on Posts {
    title
    author
  }
`;
