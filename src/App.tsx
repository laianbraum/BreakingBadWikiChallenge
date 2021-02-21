import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import CharacterPage from './pages/CharacterPage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/character/:id" component={CharacterPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
