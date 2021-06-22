import React, {useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Containers/Home';
import NoMatch from './Containers/NoMatch';
import Search from './Containers/Search';

// import './App.css';
function App() {
  useEffect(() =>{axios.get("/api/config").then((response)=>{
    console.log(response.data)
  }).catch((err)=>{
    console.log(err)
  })}, [])
  
  return (
  <Router>
<Switch>
  <Route exact path='/' component={Home} />
  <Route path='/search' component={Search} />
  <Route component={NoMatch} />
</Switch>
  </Router>
  );
}

export default App;
