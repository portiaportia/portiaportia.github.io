const getBreweries = async() => {
    try {
        return (await fetch("https://api.openbrewerydb.org/breweries")).json();
    } catch(error) {
        console.log(error);
    }
}

const showBreweries = async() => {
    const breweries = await getBreweries();

    console.log(breweries);
}

showBreweries();