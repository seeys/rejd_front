import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

// 라우터를 구성하는 파일 
const Root = ({store}) => {
    return (
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter>
    );
};

export default Root;