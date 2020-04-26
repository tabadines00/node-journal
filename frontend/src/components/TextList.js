import React from 'react';  //step 1

const TextList = ({ lines }) => { // step 2 declare component
    const [item, setItem] = React.useState('');

    return(
        <div>
            <ul>
                { lines.map((line) => {
                    return (
                    <li className="line-item">{line}</li>
                    );
                })}
                <li className="line-item">
                    <input value={item} onChange={e => setItem(e.target.value)} />
                    <button onClick={submitItem}>Add</button>
                </li>
            </ul>
        </div>
    );
};

//step 3
export default TextList;