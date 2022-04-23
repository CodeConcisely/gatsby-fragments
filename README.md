# How to Write Reusable Queries in Gatsby

This is a demo project for [_How to Write Reusable Queries in Gatsby_](https://www.codeconcisely.com/posts/how-to-write-reusable-queries-in-gatsby/) article.
Learn how to use fragments to reuse GraphQL queries in Gatsby.

A fragment is created in `src/fragments.js`.

The fragment is then used in `src/pages/index.js` and `src/templates/post.js`.

As an example, dummy data is used, which is defined in `data_source/posts.json`.

The data is sourced and used for creating pages in `gatsby-node.js`.
