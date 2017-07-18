import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import { Scroll } from 'react-scroll';

import Layout from './Layout';

import Header from './header/Header';
import Splash from './home/Splash';
import Services from './home/Services';
import Work from './home/Work';
import Contact from './home/Contact';
import ContactTemp from './home/ContactTemp';
import Footer from './footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="app">

          <Header />

          <Splash />

          <div className="layout-wrapper">
            <Layout page="home">

              <Services />
              <Work />
              {/* <Contact /> */}
              <ContactTemp />


            </Layout>
          </div>

        <Footer />

      </div>

    )
  }
}

export default App;
