import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Blog from './blog';

import sortArticles from './sort-articles';

const BlogContainer = () => {
  const query = useStaticQuery(
    graphql`
      query {
        blog(list: {elemMatch: {title: {regex: "/.*/"}}}) {
          list{
            authors
            journal
            issue
            pages
            pmid
            title
            volume
            year
          }
        }
      }
    `,
  );

  const blogByYear = query.blog && query.blog.list.length > 0
    ? sortArticles(query.blog.list)
    : null;

  return (
    blogByYear
    && <Blog blog={blogByYear} />
  );
};

export default BlogContainer;
