import logo from './logo.svg';
import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter,
  Link
} from "react-router-dom";
import Login from './Screens/login';
import Dashboard from './Screens/dashboard';


function App() {

 const [userValid, setUserValid] = React.useState(true)
  // Dashboard root routing
  return (
    <div >
      <BrowserRouter >
      <Switch>
        <Route path="/login">
          <Login setValidation={setUserValid} userValid={userValid}/>
          </Route>
        {userValid === true ? (<Route path="/dashboard"><Dashboard setValidation={setUserValid} userValid={userValid}/></Route>) :
         (<Link to="/login" style={{fontSize: 30}}>Must Sign in with valid credentials</Link>)}
  
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
