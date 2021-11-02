import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const PostLayout = (props) => {
  const { children, title, date } = props;
  return (
    <div className="container-fluid my-2 px-3 px-sm-0">
      <Header title={title} />
      <main className="post-body">
        <h1 className="display-5 mb-0 text-center">{title}</h1>
        <div className="text-muted text-center">{date}</div>
        <hr />
        <div className="my-4 px-2 px-sm-3 px-lg-0">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default PostLayout;
