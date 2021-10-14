import * as React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Hero from "../components/Hero";

const IndexPage = () => {
  return (
    <div className="container-fluid my-2">
      <Header />
      <main className="">
        <Hero />
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div class="input-group mb-3">
              <input
                type="search"
                class="form-control rounded rounded-pill"
                placeholder="Search topic"
                aria-label="Search topic"
              />
            </div>
          </div>
        </div>
        <section className="row justify-content-center px-2 px-sm-0">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </div>
  );
};

export default IndexPage;
