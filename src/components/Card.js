import React from 'react'

const Card = () => {
    return (
        <div className="card m-2 col-12 col-sm-5 col-lg-3 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Post title</h5>
            <h6 className="card-subtitle mb-2 text-muted fs-6">Date: 20th August 2019</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link text-decoration-none">Read</a>
          </div>
        </div>
    )
}

export default Card
