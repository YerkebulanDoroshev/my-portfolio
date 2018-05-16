import React, { Component } from 'react'
import Card from './../../Card/Card'

 class Main extends Component {
  render() {
    var rows = [];
    for (var i = 0; i < 3; i++) {
      rows.push(
        <Card var={i} />
      );
    } 
    return (
      <div>
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