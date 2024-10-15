const getBreweries = async() => {
    try {
        return (await fetch("https://api.openbrewerydb.org/breweries")).json();
    } catch(error) {
        console.log(error);
    }
}

const showBreweries = async() => {
    const breweries = await getBreweries();

    breweries.forEach((brewery)=>{
        const section = document.createElement("section");
        section.classList.add("brewery");
        document.getElementById("breweries-section").append(section);

        //create the heading
        const a = document.createElement("a");
        a.href= brewery.website_url;
        section.append(a);
        const h3 = document.createElement("h3");
        h3.innerHTML = brewery.name;
        a.append(h3);

        //brewery type
        const p = document.createElement("p");
        p.innerHTML = brewery.brewery_type + " brewery";
        section.append(p);
        
    });
}

showBreweries();