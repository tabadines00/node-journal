import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NewReflection from './pages/NewReflection';

const App = () => {
  const [appUser, setAppUser] = React.useState(null);
  
  return (
    <div>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/newReflection"> New </Link>
      </nav>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/newReflection">
          <NewReflection />
        </Route>
      </Switch>
    </div>
  );
};

export default App;