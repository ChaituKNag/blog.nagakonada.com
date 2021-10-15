import { graphql } from "gatsby";
import React, { useState } from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import DefaultLayout from "../components/layouts/default";

// const posts = [
//   {
//     title: "Lorem, ipsum dolor.",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur cumque eos voluptatibus.",
//     postId: 1
//   },
//   {
//     title: "Repellat, quos quisquam!",
//     description:
//       "Atque facere aliquam fugiat accusantium illum magni beatae hic sunt repudiandae et!",
//     postId: 2
//   },
//   {
//     title: "Omnis, quisquam similique.",
//     description:
//       "Aliquid modi excepturi quasi adipisci! Labore error laborum voluptates perferendis distinctio eum?",
//     postId: 3
//   },
//   {
//     title: "Maiores, illo? Quibusdam.",
//     description:
//       "Ipsa hic quidem veniam sapiente? Id consequuntur laborum eos delectus ad dignissimos!",
//     postId: 4
//   },
//   {
//     title: "Assumenda, sunt officia!",
//     description:
//       "Accusantium fuga totam sunt inventore nisi, minima sed? Eos officiis quis ratione?",
//     postId: 5
//   }
// ];

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
      <section className="row justify-content-center px-2 px-sm-0">
        {filtered.length > 0 ? (
          filtered.map((post) => <Card key={post.id} post={post} />)
        ) : (
          <p className="text-center fs-5">Nothing to read, stay tuned!</p>
        )}
      </section>
    </DefaultLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomePageQuery {
    allMdx {
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
