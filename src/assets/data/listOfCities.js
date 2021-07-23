/*
    We could also fetch the list of available cities from the api, something like this:

    useEffect( ()=> {
        1. Fetch Data

        2. Loop through the json

        3. Push each city into a new cell (that is later saved in state) 
    }, []);

    But for simplicity I chose a static list of cities
    
*/


const citiesList = [
    'Aberdeen', 
    'Armagh', 
    'Aston Hill', 
    'Barnsley', 
    'Bath', 
    'Belfast', 
    'Birmingham', 
    'Blackburn', 
    'Blackpool', 
    'Bradford', 
    'Bristol', 
    'Cambridge', 
    'Cardiff', 
    'Coventry', 
    'Derby', 
    'Doncaster', 
    'Edimburg', 
    'Exeter', 
    'Galsgow', 
    'Glazebury', 
    'Hull', 
    'Leeds', 
    'Leicester', 
    'Liverpool',
    'London', 
    'Luton', 
    'Manchester',
    'Middlesbrough', 
    'Northampton', 
    'Nottingham', 
    'Oxford', 
    'Reading', 
    'Sheffield', 
    'Southampton', 
    'Stockbridge', 
    'Sunderland', 
];

export default citiesList;