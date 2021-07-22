import React, {useState, useContext} from 'react';
//importing the state from our StateContext
import { StateContext } from './StateContext';

const SelectCity = () => {
    //setting up state from our StateContext
    const [citiesToChooseFrom, setCitiesToChooseFrom] = useContext(StateContext);

    //setting up additional state
    const [inputCity, setInputCity] = useState('');
    const [filteredCitiesToChooseFrom, setFilteredCitiesToChooseFrom] = useState([]);

    //setting our event handlers
    const inputTextHandler = (e) => {
        const currentTextString = e.target.value;
        //console.log(currentTextString);
        //if user hasn't typed anything then reset the filteredCitiesToChooseFrom array to empty
        if(currentTextString === ''){
            setFilteredCitiesToChooseFrom([]);
        }

        //As user types check for any matches within the citiesToChooseFrom array. Matches
        //go into filteredCitiesToChooseFrom array which updates as user keeps typing
        setInputCity(currentTextString);
        setFilteredCitiesToChooseFrom(citiesToChooseFrom.sort().filter( cityItem =>(
            cityItem.toLocaleLowerCase().match(inputCity.toLocaleLowerCase())
        )));
    }

    const selectCityHandler = (city) => {
        setInputCity(city);
        setFilteredCitiesToChooseFrom([]);
    }

    //additional functions go here
    const renderSuggestions = () => {
        if(filteredCitiesToChooseFrom.length === 0){
            return null;
        }
        return(
            <ul className="suggestions-list">
                {filteredCitiesToChooseFrom.map( city => (
                    <li onClick={() => selectCityHandler(city)}>{city}</li>
                ))}
            </ul>
        )
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