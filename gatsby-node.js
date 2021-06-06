const path = require('path');
const postsSource = require('./data_source/posts.json');

// Create nodes for GraphQL for each blog post.
// This allows you to query the blog posts with GraphQL anywhere
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  postsSource.forEach(post => {
    const node = {
      ...post,
      id: createNodeId(`Post-${post.title}`),
      internal: {
        type: 'Posts',
        contentDigest: createContentDigest(post),
      },
    };
    actions.createNode(node);
  });
};

// Create a page for each blog post.
// Pass the post id to the template via context
// Gatsby runs createPages after sourceNodes, therefore the data is available inside the template.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/post.js`);
  const queryResults = await graphql(`
    query Posts {
      allPosts {
        nodes {
          id
        }
      }
    }
  `);

  queryResults.data.allPosts.nodes.forEach(post => {
    createPage({
      path: `posts/${post.id}`,
      component: postTemplate,
      context: {
        id: post.id,
      },
    });
  });
};
