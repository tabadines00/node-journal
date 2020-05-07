import React from 'react';
import axios from 'axios'; // don't forget this
import TextList from '../components/TextList';

const NewReflection = ({ appUser, setAppUser }) => {
  // pass in default value into useState
  const [pros, setPros] = React.useState([]);
  const [cons, setCons] = React.useState([]);
  const [refs, setRefs] = React.useState(''); // create a state variable + setter

  const finish = () => { // arrow/lambda function
    console.log(pros);
    console.log(cons);
    console.log(refs);

    const body = {
      pros: pros,
      cons: cons,
      refs: refs
    };

    axios.post('/api/addEntry', body)
      .then(() => setPros([])) // clear all states
      .then(() => setCons([]))
      .then(() => setRefs(''))
      .catch(console.log);
  };

  // jsx
  return (
    <div className="ref">
      <h1>New Reflection</h1>
      <div>
        <div>
          <div className="pros-container">
            <h2>Pros:</h2>
            <TextList lines={pros} setLine={setPros} />
          </div>
          <div className="cons-container">
            <h2>Cons:</h2>
            <TextList lines={cons} setLine={setCons} />
          </div>
          <div className="reflection-container">
            <h2>Reflection:</h2>
            <textarea value={refs} onChange={e => setRefs(e.target.value)} />
        </div>
        </div>
        <div>
          <button className="finish-button" onClick={finish}>Finish</button>
        </div>
      </div>
    </div>
  );
};

export default NewReflection;