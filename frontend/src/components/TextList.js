import React from 'react';  //step 1

const TextList = ({ lines, setLine }) => { // step 2 declare component
    const [item, setItem] = React.useState('');

    const submitItem = () => {
        // Add the current item to the lines
        lines.push(item);
        console.log(item);
        setItem('');
    }

    return(
        <div>
            <ul>
                { lines.map((line, i) => {
                    return (
                    <li className="line-item" key={line + i}>{line}</li>
                    );
                })}
                <li className="line-item input-item">
                    <input value={item} onChange={e => setItem(e.target.value)} />
                    <button className="add-button" onClick={submitItem}>Add</button>
                </li>
            </ul>
        </div>
    );
};

//step 3
export default TextList;