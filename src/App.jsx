import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import { Login } from './Pages/Login/Login';
import { Registration } from './Pages/Registration/Registration';

function App() {
  return (
    <div className='App' id='app'>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/registration'>
          <Registration />
        </Route>
        <Route path='/main'>MAIN</Route>
        <Route path='/'>HOME</Route>
      </Switch>
    </div>
  );
}

export default App;
