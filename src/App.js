import React from 'react';
import Home from './route/Home'
import './App.css'
import {HashRouter, Route} from 'react-router-dom';
import About from './route/About'
import Navigation from './components/Navigation';
import Detail from './route/Detail';

function App(){
  return (
    <HashRouter>   
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}
// 항상 마지막라인
export default App;
 
