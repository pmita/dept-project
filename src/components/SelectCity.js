import React, { useContext } from 'react';
//importing the state from our StateContext
import { StateContext } from './StateContext';

const SelectCity = () => {
    //de-costructing the state from the Context api
    const [citiesToChooseFrom, setCitiesToChooseFrom, inputCity, setInputCity, filteredCitiesToChooseFrom, setFilteredCitiesToChooseFrom, allLocations, setAllLocations] = useContext(StateContext);

    /*
        -------------Event handlers go here------------------
    */
    const inputTextHandler = (e) => {
        const currentTextString = e.target.value;
        //if user hasn't typed anything then reset the filteredCitiesToChooseFrom array to empty
        if(currentTextString === '') setFilteredCitiesToChooseFrom([]);

        //As user types save any match from citiesToChooseFrom array, to filteredCitiesToChooseFrom array
        setInputCity(currentTextString);
        setFilteredCitiesToChooseFrom(citiesToChooseFrom.sort().filter( cityItem =>(
            cityItem.toLocaleLowerCase().match(inputCity.toLocaleLowerCase())
        )));
    }

    const selectCityHandler = (city) => {
        setInputCity(city);
        setFilteredCitiesToChooseFrom([]);
        //user selects city so we fetch the data from the api
        getApiData(city);
    }

    /*
        -----------Additional functions go here-----------------
    */
    const renderSuggestions = () => {
        if(filteredCitiesToChooseFrom.length === 0){
            return null;
        }
        return(
            <ul className="suggestions-list">
                {filteredCitiesToChooseFrom.map( (city, index) => (
                    <li key={index} onClick={() => selectCityHandler(city)}>{city}</li>
                ))}
            </ul>
        )
    }

    const getApiData = async (city) => {
        //Fetch data from api based on the city the user selects
        const apiLink = `https://api.openaq.org/v1/latest?city=${city}`;
        const response = await fetch(apiLink);
        const responseJSON = await response.json();
        const cityData = await responseJSON.results[0];

        //Save the data to a new cell of the allLocations array
        await setAllLocations([...allLocations, {
            city: cityData.city,
            location: cityData.location,
            measurements: cityData.measurements
        }]);
    }

    return(
        <div className="selectCity-section">
            <form>
                <input 
                    type="text"
                    placeholder="Enter city name..."
                    value={inputCity}
                    onChange={inputTextHandler}
                />
                {renderSuggestions()}
            </form>
        </div>
    );
}

export default SelectCity;