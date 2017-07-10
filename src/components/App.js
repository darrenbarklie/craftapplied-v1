import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';

import Header from './header/Header';
import Splash from './home/Splash';
import Services from './home/Services';
import Work from './home/Work';
import Contact from './home/Contact';
import Footer from './footer/Footer';


// import Stage from './stage/Stage';
// import Footer from './footer/Footer';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Grid fluid className="app">

          <div className="splash-background"></div>

          <div className="page-home page">
            <Header />
            <Splash />
            <Services />
            <Work />
            <Contact />
            <Footer />
          </div>

          {/* <div className="footer-background">HEY</div> */}

        </Grid>
      </HashRouter>
    )
  }
}

export default App;
