import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import { Scroll } from 'react-scroll';

import Layout from './Layout';

import Header from './header/Header';
import Splash from './home/Splash';
import Services from './home/Services';
import Work from './home/Work';
import Contact from './home/Contact';
import Footer from './footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="app">

        <Header />

        <Splash />

        <Layout page="home">



        </Layout>



        <Grid fluid className="grid-container" >

          {/* <div className="splash-background"></div> */}

          {/*
          <div className="page-home page">
            <Header />

            <Splash />
            <Services />
            <Work />
            <Contact />

            <Footer />
          </div> */}

        </Grid>

      </div>

    )
  }
}

export default App;
