import React,{Component} from 'react'
import * as FontAwesome from 'react-icons/lib/fa'
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
          <div className="container d-flex justify-content-around flex-wrap">
            {rows}
          </div>
        </main>

        <footer style={{textAlign:'center'}}>
          <div className="d-flex bd-highlight justify-content-between flex-wrap">
            <div className="p-2 flex-fill bd-highlight">
              <h4>Doroshev Yerkebulan</h4>
              <p>Web-developer, UI-designer</p>
              <p>2016 - {(new Date().getFullYear())}</p>
            </div>
            <div className="p-2 flex-fill bd-highlight">
              <a href="https://www.instagram.com/y.e.r.k.e/"><FontAwesome.FaInstagram size={60} /></a>
              <a href="https://github.com/YerkebulanDoroshev"><FontAwesome.FaGithub size={60} /></a>
              <a href="https://www.linkedin.com/in/yerkebulan"><FontAwesome.FaLinkedin size={60} /></a>
            </div>
            
          </div>
        </footer>

      </div>
    )
  }
  
}

export default Home;
