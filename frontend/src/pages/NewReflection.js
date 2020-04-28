import React from 'react';
import axios from 'axios'; // don't forget this
import Notes from '../components/Notes';
import { Redirect } from 'react-router-dom';
import Pros from '../components/Pros.js';
import Cons from '../components/Cons.js';
import Reflection from '../components/Reflection.js';

const Home = ({ appUser, setAppUser }) => {
  // pass in default value into useState
  const [reflection, setReflection] = React.useState(''); // create a state variable + setter
  const [reflections, setReflections] = React.useState(['Demo note']); // if map of undefined 

  const finish = () => { // arrow/lambda function
    console.log(note);
    const body = {
      note: note
    };
    axios.post('/api/addNote', body)
      .then(() => setNote(''))
      .then(() => fetchNotes()) // fetch after submit
      .catch(console.log);
  };

  // jsx
  return (
    <div>
      <h1>Add A new Reflection</h1>
      <div>
        <div>
          <Pros />
          <Cons />
          <Reflection />
        </div>
        <div>
          <button onClick={finish}>Finish</button>
        </div>
      </div>
    </div>
  );
};

export default Home;