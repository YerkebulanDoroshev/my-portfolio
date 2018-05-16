import React from 'react'
import './Home.css'
import logo from './../../static/index.png'

const Home = () => {
  return (
    <div>
      <header>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">Welcome</h1>
            <p className="lead">Portfolio of design, web, mobile development</p>
          </div>
        </div>
      </header>
      
      <main>
        <div className="container d-flex justify-content-between">
          <div className="card" >
            <img className="card-img-top" src={logo} alt="Card cap" />
            <div className="card-block">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="card" >
            <img className="card-img-top" src={logo} alt="Card cap" />
            <div className="card-block">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="card" >
            <img className="card-img-top" src={logo} alt="Card cap" />
            <div className="card-block">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div>
          This is footer
        </div>
      </footer>
      
    </div>
  )
}

export default Home;
