import React, { Component } from 'react'
import Card from './../../Card/Card'
import './Main.css'

 class Main extends Component {
  render() {
    var rows = [];
    for (var i = 0; i < 3; i++) {
      rows.push(
        <Card var={i} />
      );
    } 
    return (
      <div className="Main">
        <main>
          <div className="container d-flex justify-content-around flex-wrap">
            {rows}
          </div>
        </main>
      </div>
    )
  }
}
export default Main;