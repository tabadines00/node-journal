import React from 'react';
import axios from 'axios'; // don't forget this

const ViewReflections = ({ appUser, setAppUser }) => {
  // pass in default value into useState
  const [refs, setRefs] = React.useState([]); // if map of undefined 

  const fetchRefs = () => {
    // utility to get all notes
    axios.get('/api/getAllEntries')
      .then((res) => {
        console.log(res);
        setRefs(res.data.refs); // update state variable
      })
      .catch(console.log);
  };

  // this is a hook
  React.useEffect(() => {
    // this will load notes when the page loads
    fetchRefs();
  }, []); // pass empty array

  // jsx
  return (
    <div>
      <h1>My Entries</h1>
      <div>
        <div className="notes">
            {refs.map((ref, i) => (
            <div className="note-item" key={i}>
                <div>{i}</div>
                <Reflection entry={ref} />
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ViewReflections;