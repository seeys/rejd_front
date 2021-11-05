import React, { Component } from 'react';
import Main from '../components/base/Main';
import Footer from 'components/base/Footer';
import Header from 'components/base/Header';

class Home extends Component {

    render () {
        return (
            <div>
               <Header/>
               <Main/>
               <Footer/>
            </div>
        );
    }
}

export default Home;