import { graphql } from "gatsby";
import React, { useState } from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import DefaultLayout from "../components/layouts/default";

const IndexPage = ({ data }) => {
  const posts = (data.allMdx.edges || []).map((item) => item.node);
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (e) => setSearchText(e.target.value);
  const filtered = posts.filter(
    (post) =>
      post.frontmatter.title.toLowerCase().includes(searchText.toLowerCase()) ||
      post.frontmatter.description
        .toLowerCase()
        .includes(searchText.toLowerCase())
  );

  return (
    <DefaultLayout>
      <Hero />
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="input-group mb-3">
            <input
              type="search"
              className="form-control form-control-lg rounded rounded-pill shadow-sm"
              placeholder="Search topic"
              aria-label="Search topic"
              defaultValue={searchText}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
      {filtered.length > 0 && (
        <section className="post__cards px-2 my-2 my-md-5 px-lg-0 mx-auto grid">
          {filtered.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </section>
      )}
      {filtered.length === 0 && (
        <p className="text-center fs-5">Nothing to read, stay tuned!</p>
      )}
    </DefaultLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomePageQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            description
          }
          id
          slug
        }
      }
    }
  }
`;
