import React from 'react';  //step 1
import TextList from './TextList.js';

const Pros = () => { // step 2 declare component
    //Notes specific logic in here
    //const [note, set] = React.useState(''); // create a state variable + setter
    /*
    const submitPro = () => { // arrow/lambda function
        console.log(note);
        const body = {
          note: note
        };
        axios.post('/api/addNote', body)
          .then(() => setNote(''))
          .then(() => fetchNotes()) // fetch after submit
          .catch(console.log);
    };
    */

    return(
        <div className="pros-container">
            <h2>Pros:</h2>
            <TextList lines={lines} />
        </div>
    );
};

//step 3
export default Pros;