
import React from 'react';

/*
    Dump component for re-suable Text/Subtext combination. The main reason
    for this is for us to easily change the text if needed. 
*/

const Headline = ({
    title='This is our Title',
    textLineOne='Enter some text here',
    textLineTwo='Additional text goes here',
}) => {
    return(
        <div className='headline'>
            <h1>
                {title}
            </h1>
            <p>
                {textLineOne}
            </p>
            <p>
                {textLineTwo}
            </p>
        </div>
    );
}

export default Headline;