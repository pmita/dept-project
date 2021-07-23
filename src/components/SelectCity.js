import React, { useContext } from 'react';
//importing the state from our StateContext
import { StateContext } from './StateContext';
//importing assets
import searchBtn from '../assets/icons/search.svg';
//importing a unique identifier generator
import { v4 as uuidv4 } from 'uuid';

const SelectCity = () => {
    //destructuring  the state from the Context api
    const [allLocations, setAllLocations, citiesToChooseFrom, inputCity, setInputCity, filteredCitiesToChooseFrom, setFilteredCitiesToChooseFrom] = useContext(StateContext);

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
        getApiData(city); //user selects city so we fetch the data from the api
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('Please select a city from the list');
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
        try{
            //Fetch data from api based on the city the user selects
            const apiLink = `https://api.openaq.org/v1/latest?city=${city}`;
            const response = await fetch(apiLink);
            const responseJSON = await response.json();
            const cityData = await responseJSON.results[0];

            //Save the data to a new cell of the allLocations array
            await setAllLocations([...allLocations, {
                id: uuidv4(),
                city: cityData.city,
                location: cityData.location,
                measurements: cityData.measurements
            }]);

            setInputCity(''); //at the end reset the input text
        } catch(err){
            console.error('Please try a different city, openAQ does not recognise this one');
        }
    }

    return(
        <div className="selectCity-section">
            <form onSubmit={onSubmitHandler}>
                <img src={searchBtn} alt='search button' />
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