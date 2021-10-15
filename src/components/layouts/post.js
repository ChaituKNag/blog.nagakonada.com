import React from "react";
import Header from "../Header";

const PostLayout = (props) => {
  const { children, title, date } = props;
  return (
    <div className="container-fluid my-2">
      <Header title={title} />
      <main className="post-body">
        <h1 className="display-5 mb-0 text-center">{title}</h1>
        <div className="text-muted text-center mb-3">{date}</div>
        <div className="py-3">{children}</div>
      </main>
    </div>
  );
};

export default PostLayout;
