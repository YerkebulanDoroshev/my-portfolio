import React,{Component} from 'react'
import './Home.css'
import Card from './Card/Card'

class Home extends Component{
  render(){
    var rows = [];
    for (var i = 0; i < 3; i++) {
      rows.push(
        <Card var={i}/>
      );
    } 
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
            {rows}
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
  
}

export default Home;
