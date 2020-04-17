import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  const [appUser, setAppUser] = React.useState(null);
  
  return (
    <div>
      <nav>
        <Link to="/"> Home </Link>
      </nav>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;