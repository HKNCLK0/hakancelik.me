import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './screens/Home';

function App() {

  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;