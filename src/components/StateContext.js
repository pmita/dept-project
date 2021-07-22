import React, { useState, createContext} from 'react';
//importing our assets
import allCities from '../assets/data/listOfCities'; //contains an array of cities in the UK

export const StateContext = createContext();

export const StateProvider = (props) => {
    //setting up our state
    const [cityOptions, setCityOptions] = useState(allCities);
    return(
        <StateContext.Provider value={[cityOptions]}>
            {props.children}
        </StateContext.Provider>
    )
}