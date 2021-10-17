import React from "react";

const Footer = () => {
  return (
    <div className="mt-5 text-center mb-2">
      <hr />
      <p>
        All rights reserved &copy; {new Date().getFullYear()} -{" "}
        <a
          href="https://twitter.com/@itsKNC"
          target="_blank"
          rel="noopener noreferrer"
        >
          @itsKNC
        </a>
      </p>
    </div>
  );
};

export default Footer;
