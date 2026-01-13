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
    const breweriesDiv = document.getElementById("breweries");

    breweries.forEach(async(brewery)=>{
        const brewerySection = document.createElement("section");
        breweriesDiv.append(brewerySection);

        //create the title
        const h3 = document.createElement("h3");
        const a = document.createElement("a");
        a.href= brewery.website_url;
        a.innerHTML = brewery.name;
        h3.append(a);
        brewerySection.append(h3);

        //map to the brewery
        const iframe = document.createElement("iframe");
        iframe.src = await getMap(brewery.latitude, brewery.longitude);
        brewerySection.append(iframe);
    });
}

showBreweries();