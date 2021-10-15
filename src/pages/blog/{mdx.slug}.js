import { graphql } from "gatsby";
import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PostLayout from "../../components/layouts/post";

const BlogPost = ({ data }) => {
  const {
    mdx: {
      body,
      frontmatter: { title, description, date }
    }
  } = data;
  return (
    <PostLayout title={title} description={description} date={date}>
      <MDXRenderer>{body}</MDXRenderer>
    </PostLayout>
  );
};

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
