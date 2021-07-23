import React from 'react';

const LocationCard = ({
    id,
    city,
    location,
    measurements,
    allLocations, 
    setAllLocations
}) => {

    /*
        --------------Setting up our event handlers-----------
    */
   const updateListHandler = () => {
       //if user clicks on X-button then remove the item from the allLocations array
        const updatedAllLocations = allLocations.filter( item => item.id !== id);
        setAllLocations(updatedAllLocations);
   }

    /*
        --------------Additional functions go here-----------
    */
   const calcLastUpdate = () => {
       const currentDate = new Date();
       const dataDate = Date.parse(measurements[0].lastUpdated);
       const timePassed = currentDate - dataDate;

       const daysElapsed = Math.floor(timePassed / (1000 * 60 *60 *24));
       const monthsElapsed = Math.floor(daysElapsed / 30);
       const hoursElapsed = Math.floor((timePassed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

       if( monthsElapsed !== 0){
           return (`${monthsElapsed} months ago`);
       } else if( daysElapsed !== 0){
            return ( `${daysElapsed} days ago`);
       } else if( hoursElapsed !== 0){
           return (`${hoursElapsed} hours ago`)
       } else{
           return (`just now`);
       }
   }

    return(
        <div className="location-card">
            <p className="uppercase-text">last updated {calcLastUpdate()}</p>
            <h1 className="highlight-text">{location}</h1>
            <h2>in {city}</h2>
            <p className="bold-text">
                Values: {measurements.map( item => ( `${item.parameter}: ${item.value}, `))}
            </p>
            <button
                onClick={updateListHandler}
            >
                X
            </button>
        </div>
    );
}

export default LocationCard;