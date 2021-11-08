import React from 'react'
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';


import Hero from './pages/Hero';
import Takimlar from './pages/Takimlar';
import Oyuncular from './pages/Oyuncular';
import Musabakalar from './pages/Musabakalar';
import Kulup from './pages/Kulup';
import Takim from './pages/singlePages/Takim';
import Oyuncu from './pages/singlePages/Oyuncu';
import Musabaka from './pages/singlePages/Musabaka';
import KulupSingle from './pages/singlePages/KulupSingle'
import Error from './components/Error';




function App() {
  
  
  

  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <Hero />
        </Route>
        <Route path="/takimlar/:slug">
          <Takim />
        </Route>
        <Route path="/takimlar"  >
          <Takimlar />
        </Route>
        <Route path="/oyuncular/:slug">
          <Oyuncu />
        </Route>
        <Route path="/oyuncular">
          <Oyuncular  />
        </Route>
        <Route path="/musabakalar/:slug">
          <Musabaka />
        </Route>
        <Route path="/musabakalar">
          <Musabakalar />
        </Route>
        <Route path="/kulup/:slug">
          <KulupSingle />
        </Route>
        <Route path="/kulup">
          <Kulup />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
