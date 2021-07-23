import React, {useContext} from 'react';
//importing our state from the context api
import { StateContext } from './StateContext';
//importing our components
import LocationCard from './LocationCard';

const LocationsSection = () => {
    //destructuring  the state from context api
    const [ allLocations, setAllLocations] = useContext(StateContext);

    return(
        <div className="location-section">
            {allLocations.map( item => (
                <LocationCard 
                    key={item.id}
                    id={item.id}
                    city={item.city}
                    location={item.location}
                    measurements={item.measurements}
                    allLocations={allLocations}
                    setAllLocations={setAllLocations}
                />
            ))}
        </div>
    );
}

export default LocationsSection;