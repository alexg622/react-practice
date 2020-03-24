import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/testing' render={() => (
          <div>test route</div> )} />
      </Switch>
    </Router>
  );
};

export default App;
