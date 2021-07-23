import React, { useState, createContext} from 'react';
//importing our assets
import allCities from '../assets/data/listOfCities'; //contains an array of cities in the UK

export const StateContext = createContext();

export const StateProvider = (props) => {
    //setting up our state
    const [allLocations, setAllLocations] = useState([]);
    const [cityOptions, setCityOptions] = useState(allCities);
    const [inputCity, setInputCity] = useState('');
    const [filteredCitiesToChooseFrom, setFilteredCitiesToChooseFrom] = useState([]);

    return(
        <StateContext.Provider 
            value={[allLocations, setAllLocations, cityOptions, setCityOptions, inputCity, setInputCity, filteredCitiesToChooseFrom, setFilteredCitiesToChooseFrom]}
        >
            {props.children}
        </StateContext.Provider>
    )
}