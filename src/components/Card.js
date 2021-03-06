import { Link } from "gatsby";
import React from "react";

const Card = ({
  post: {
    slug,
    frontmatter: { title, description }
  }
}) => {
  return (
    <div className="post__card card g-col-12 g-col-sm-6 g-col-lg-4 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-3">{title}</h5>
        {/* <h6 className="card-subtitle mb-2 text-muted fs-6">Date: 20th August 2019</h6> */}
        <p className="card-text flex-grow-1">{description}</p>
        <Link
          to={`/blog/${slug}`}
          className="card-link btn btn-sm btn-outline-primary text-decoration-none"
        >
          Read
        </Link>
      </div>
    </div>
  );
};

export default Card;
