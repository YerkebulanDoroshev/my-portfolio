import React from 'react'
import Main from './Main/Main'
import Header from './Header/Header'


import './Home.css'

const Home = (props) => {
    
    return (
      <div className="Home">
        <Header />

        <Main />
      </div>
    )
}

export default Home;
