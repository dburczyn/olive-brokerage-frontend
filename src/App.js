import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class App extends Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      grids: []
    };
    this.handler = this.handler.bind(this);
  }
  handler (grids)
  {
    this.setState({
      grids: grids
    });
  }

  render ()
  {
    const { grids } = this.state;
    return (
      <div>
        <Header handler={this.handler} />
        <Main grids={grids} />
        <Footer />
      </div>
    );


  }


}
