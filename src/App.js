import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Route, Switch } from 'react-router';
import { Login } from './Pages/Login/Login';
import { MainLayout } from './Components/MainLayout/MainLayout';

function App() {
  return (
    <div className="App" id='app'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/main'>MAIN</Route>
          <Route path='/'>HOME</Route>
        </Switch>
    </div>
  );
}

export default App;
