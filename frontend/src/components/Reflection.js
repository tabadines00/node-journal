import React from 'react';  //step 1

const Reflection = ({entry}) => { // step 2 declare component
    //Notes specific logic in here
    return(
        <div className="reflection-container">
            entry.date
            <ul>
                { entry.pros.map((pro, i) => {
                    return (
                    <li className="line-item" key={pro + i}>{pro}</li>
                    );
                })}
            </ul>
            <ul>
                { entry.cons.map((con, i) => {
                    return (
                    <li className="line-item" key={con + i}>{con}</li>
                    );
                })}
            </ul>
        </div>
    );
};

//step 3
export default Reflection;