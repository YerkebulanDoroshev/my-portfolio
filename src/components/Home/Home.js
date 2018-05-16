import React,{Component} from 'react'

import Main from './Main/Main'
import Footer from './../Footer/Footer'
import Header from './Header/Header'

import './Home.css'

class Home extends Component{
  render(){
    
    return (
      <div className="Home">
        <Header />

        <Main />

        <Footer />

      </div>
    )
  }
  
}

export default Home;
