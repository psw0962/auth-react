import React from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import { Route, Switch } from 'react-router-dom';

// Route
import AuthMain from 'pages/main/index';
import Login from 'pages/login/index';
import CreateUser from 'pages/createuser/index';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={AuthMain} />
        <Route path="/login" component={Login} />
        <Route path="/createuser" component={CreateUser} />
      </Switch>
    </>
  );
};

export default App;
