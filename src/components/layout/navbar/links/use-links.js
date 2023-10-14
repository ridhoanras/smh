import { useStaticQuery, graphql } from 'gatsby';

const useLinks = () => {
  const query = useStaticQuery(
    graphql`
      query {
        about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
      blog(list: {elemMatch: {title: {regex: "/.*/"}}}) {
          list{
            title
          }
        }
      }
    `,
  );

  const links = [];

  if (query.about.edges.length > 0) {
    links.push('about');
  }
  if (query.blog) {
    links.push('blog');
  }

  return links;
};

export default useLinks;
