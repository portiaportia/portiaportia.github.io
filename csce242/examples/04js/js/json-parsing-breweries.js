//https://www.openbrewerydb.org/documentation
const getMap = async(latitude, longitude) => {
    try {
        return (
            await fetch(
                `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&&output=embed`
            )
        ).url;
    } catch (error) {
        console.log(error);
    }
};

const getBreweries = async() => {
    const url = "https://api.openbrewerydb.org/v1/breweries";

    try {
        const response = await fetch(url);
        return response.json();
    }catch(error){
        console.log(error);
    }
};

const showBreweries = async() => {
    const breweries = await getBreweries();
    console.log(breweries);
}

showBreweries();