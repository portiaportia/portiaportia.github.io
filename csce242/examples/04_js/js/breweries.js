const getBreweries = async() => {
    const url = "https://api.openbrewerydb.org/v1/breweries";
    
    try {
        const response = await fetch(url);
        return response.json();
    }catch(error) {
        console.log("Issue");
    }
    
};

const showBreweries = async() => {
    const breweries = await getBreweries();
    console.log(breweries);
};

showBreweries();