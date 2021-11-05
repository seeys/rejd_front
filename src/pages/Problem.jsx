import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import FrontList from 'containers/problem/front/FrontList';
import BackList from 'containers/problem/back/BackList';
import { Route } from 'react-router-dom';

// 프론트, 백 문제 리스트 컴포넌틀 라우터 할 곳
class Problem extends Component {

    render () {
        return (
            <BackColor>
                <Route path="/list/front" component={FrontList}/>
                <Route path="/list/back" component={BackList}/>
            </BackColor>
        );
    }
}

const BackColor = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${oc.violet[6]};
`;

export default Problem;