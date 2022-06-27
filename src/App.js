import React from 'react';
import './App.css';
import Nav from './Nav';
import Login from './Login';
import Signup from './Signup';
import { Route, BrowserRouter as  Router} from 'react-router-dom';


function App() {
  return (
  
    <div className="App">
      <Signup />
      
    </div>
 
  );
}
const Home = () => (
  <div>
    <h1>homeone</h1>
  </div>
);

export default App;
