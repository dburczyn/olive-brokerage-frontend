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
      grids: [],
      htmlpages: []
    };
    this.handlergrids = this.handlergrids.bind(this);
    this.handlerhtml = this.handlerhtml.bind(this);
  }
  handlergrids (grids)
  {
    this.setState({
      grids: grids,
    });
  }

  handlerhtml (htmlpages)
  {
    this.setState({
      htmlpages: htmlpages
    });
  }

  render ()
  {
    const { grids,htmlpages } = this.state;
    return (
      <div>
        <Header handlergrids={this.handlergrids}  handlerhtml={this.handlerhtml}  />
        <Main grids={grids} htmlpages={htmlpages} />
        <Footer />
      </div>
    );


  }


}
