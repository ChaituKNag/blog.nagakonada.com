import { Link } from "gatsby"
import * as React from "react"
import Card from "../components/Card"

// markup
const IndexPage = () => {
  return (
    <main className="container-fluid my-2">
      <header className="mb-5">
        <nav className="col d-flex align-items-baseline justify-content-between">
          <h1 className="fs-5 d-inline-block">
            <Link to="/" className="text-decoration-none">Naga Konada</Link>
          </h1>
          <button className="btn btn-outline-primary btn-sm">Portfolio</button>
        </nav>
      </header>
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
  )
}

export default IndexPage
