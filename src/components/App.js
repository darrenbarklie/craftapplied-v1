import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';

// import Header from './header/Header';
// import Stage from './stage/Stage';
// import Footer from './footer/Footer';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Grid fluid className="app">

          {/* <Header />
          <Stage />
          <Footer /> */}
          <h1>Hey</h1>

        </Grid>
      </HashRouter>
    )
  }
}

export default App;
