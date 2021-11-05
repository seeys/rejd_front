import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Auth } from 'pages';
import Problem from 'pages/Problem';

// 라우트 정의 컴포넌트

function App() {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/auth" component={Auth}/>
      <Route path="/list" component={Problem}/>
    </div>
  );
}

export default App;
