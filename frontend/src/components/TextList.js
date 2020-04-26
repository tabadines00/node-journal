import React from 'react';  //step 1

const TextList = () => { // step 2 declare component
    const [lines, setLines] = React.useState(['yeet']); // if map of undefined 

    return(
        <div>
            { lines.map(line => (
                <p>{line}</p> ))}
        </div>
    );
};

//step 3
export default TextList;