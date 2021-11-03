import React, { Component } from 'react';
import Main from '../components/Main';
import Footer from 'components/Footer';
import Header from 'components/Header';

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