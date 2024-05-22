//https://api.openbrewerydb.org/breweries

const getBreweries = async() => {
    try {
        return (await fetch("https://api.openbrewerydb.org/breweries")).json();
    } catch(error){
        console.log(error);
    }
}

const getMap = async(lat, long) => {
    try {
        return fetch(`https://maps.google.com/maps?q=${lat},${long}&t=&z=15&ie=UTF8&iwloc=&&output=embed`
        ).url;
    } catch(error){
        console.log(error);
    }
}

const showBreweries = async() => {
    const breweries = await getBreweries();
    const breweriesList = document.getElementById("breweries-section");

    breweries.forEach((brewery)=> {
        const section = document.createElement("section");
        section.classList.add("brewery");

        const h3 = document.createElement("h3");
        section.append(h3);
        const a = document.createElement("a");
        h3.append(a);
        a.innerHTML = brewery.name;
        a.href = brewery.website_url;

        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = `${brewery.brewery_type} brewery`;

        breweriesList.append(section);
    });
}

showBreweries();