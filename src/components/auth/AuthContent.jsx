// auth/login, auth/register 서브 라우트를 감싸주는 컴포넌트
// 어떤 페이지인지 알려줄 제목을 title props로 받아와서 보여줌

import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const AuthContent = ({title, children}) => (
    <div>
        <Title>{title}</Title>
        {children}
    </div>
);

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${oc.gray[8]};
    margin-bottom: 1rem;
`;

export default AuthContent;