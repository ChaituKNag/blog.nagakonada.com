import * as React from "react"
import Card from "../components/Card"
import Header from "../components/Header"

// markup
const IndexPage = () => {
  return (
    <div className="container-fluid my-2">
      <Header />
      <main className="">
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
  )
}

export default IndexPage
