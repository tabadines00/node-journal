import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
//import Home from './pages/Home';
import NewReflection from './pages/NewReflection';

const App = () => {
  const [appUser, setAppUser] = React.useState(null);
  
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/addEntry">New</Link>
      </nav>
      <Switch>
        <Route path="/addEntry">
          <NewReflection />
        </Route>
      </Switch>
    </div>
  );
};

export default App;