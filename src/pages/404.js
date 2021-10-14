import * as React from "react"
import { Link } from "gatsby"

// markup
const NotFoundPage = () => {
  return (
    <main className="m-5 d-flex flex-column align-items-center">
      <h1 className="fs-3">Oops, nothing here.</h1>
      <p>May be try home page?</p>
      <Link to="/" className="btn btn-lg btn-outline-primary">Yes, take me there</Link>
    </main>
  )
}

export default NotFoundPage
