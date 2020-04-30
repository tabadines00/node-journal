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