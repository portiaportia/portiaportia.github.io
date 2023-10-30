const getBreweries = async() => {
    try {
        return (await fetch("https://api.openbrewerydb.org/breweries")).json();
    } catch (error) {
        console.log(error);
    }
};

const showBreweries = async() => {
    const breweries = await getBreweries();
    const breweriesList = document.getElementById("breweries-section");

    console.log(breweries);

    breweries.forEach((brewery) => {
        const section = document.createElement("section");
        breweriesList.append(section);
        section.classList.add("brewery");

        const a = document.createElement("a");
        a.href = brewery.website_url;
        section.append(a);

        const h3 = document.createElement("h3");
        a.append(h3);
        h3.innerHTML = brewery.name;

        const p = document.createElement("p");
        a.append(p);
        p.innerHTML = `${brewery.brewery_type} brewery`;

        const iframe = document.createElement("iframe");
        iframe.src = `https://maps.google.com/maps?q=${brewery.latitude},${brewery.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

        a.append(iframe);

    });
};

window.onload = showBreweries();