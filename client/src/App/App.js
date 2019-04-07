import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Main from './pages/RandomGame';
import Account from './pages/Account';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import FirebaseProvider from './utlities/FirebaseContext';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/mypage" component={Account} />
      <Route path="/random" component={props => <Main timestamp={new Date().toString()} {...props} />} />
    </Switch>
  </div>
);

const App = () => (
  <FirebaseProvider>
    <Switch>
      <Routes />
    </Switch>
  </FirebaseProvider>
);

export default App;
