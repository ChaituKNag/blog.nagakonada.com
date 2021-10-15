import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

const Header = ({ title }) => {
  return (
    <header className="mb-5 mt-3">
      <Helmet title={title || `Blog post`} />
      <nav className="col d-flex align-items-baseline justify-content-between position-relative">
        <h1 className="fs-4 d-inline-block flex-grow-1 text-start text-md-center">
          <Link to="/" className="text-decoration-none">
            Naga Konada
          </Link>
        </h1>
        <div className="position-absolute end-0 me-2">
          <a
            href="https://tech.nagakonada.com"
            className="btn btn-outline-secondary btn-sm me-1"
          >
            Tech
          </a>
          <a
            href="https://nagakonada.com"
            className="btn btn-outline-primary btn-sm"
          >
            Portfolio
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
