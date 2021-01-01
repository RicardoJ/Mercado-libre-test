import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './pages/header/Header';
import './App.scss';
import Home from './pages/home/Home';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import SearchResult from './pages/searchResult/SearchResult';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header>
          <div className='App-container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/items' component={SearchResult} />
              <Route default component={PageNotFound} />
            </Switch>
          </div>
        </Header>
      </Router>
    </div>
  );
}

export default App;
