import React, { useState, createContext} from 'react';
//importing our assets
import allCities from '../assets/data/listOfCities'; //contains an array of cities in the UK

/*
    This section is kept minimum for simplicity reasons. Potential we could include
    more in order for us to declutter the rest of the components
*/

export const StateContext = createContext();

export const StateProvider = (props) => {
    //setting up our state
    const [allLocations, setAllLocations] = useState([]);
    const [cityOptions, setCityOptions] = useState(allCities); //setCityOptions isn't used anywhere so far so any error might appear on the console
    const [inputCity, setInputCity] = useState('');
    const [filteredCitiesToChooseFrom, setFilteredCitiesToChooseFrom] = useState([]);

    return(
        <StateContext.Provider 
            value={[allLocations, setAllLocations, cityOptions, inputCity, setInputCity, filteredCitiesToChooseFrom, setFilteredCitiesToChooseFrom]}
        >
            {props.children}
        </StateContext.Provider>
    )
}