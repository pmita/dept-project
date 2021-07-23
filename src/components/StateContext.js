import React, { useState, createContext} from 'react';
//importing our assets
import allCities from '../assets/data/listOfCities'; //contains an array of cities in the UK

export const StateContext = createContext();

export const StateProvider = (props) => {
    //setting up our state
    const [cityOptions, setCityOptions] = useState(allCities);
    const [inputCity, setInputCity] = useState('');
    const [filteredCitiesToChooseFrom, setFilteredCitiesToChooseFrom] = useState([]);
    const [allLocations, setAllLocations] = useState([]);

    return(
        <StateContext.Provider value={[cityOptions, setCityOptions, inputCity, setInputCity, filteredCitiesToChooseFrom, setFilteredCitiesToChooseFrom, allLocations, setAllLocations]}>
            {props.children}
        </StateContext.Provider>
    )
}