import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';

// 라우터를 구성하는 파일 
const Root = ({store}) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/" component={App}/>
            </BrowserRouter>
        </Provider>
    );
};

export default Root;