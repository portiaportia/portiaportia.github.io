const getBreweries = async () => {
  const url = "https://api.openbrewerydb.org/breweries";

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const showBreweries = async () => {
  let breweries = await getBreweries();
  let breweriesSection = document.getElementById("breweries-section");

  breweries.forEach((brewery) =>
    breweriesSection.append(getBreweryItem(brewery))
  );
};

const getBreweryItem = (brewery) => {
  const brewerySection = document.createElement("section");
  brewerySection.classList.add("brewery");

  const a = document.createElement("a");
  a.href = brewery.website_url;
  brewerySection.append(a);

  const h3 = document.createElement("h3");
  h3.innerText = brewery.name;
  a.append(h3);

  const p = document.createElement("p");
  p.textContent = `${brewery.brewery_type} Brewery`;
  a.append(p);

  a.append(getBreweryAddress(brewery));

  return brewerySection;
};

const getBreweryAddress = (brewery) => {
  const p = document.createElement("p");
  p.innerHTML = `${brewery.street}<br> ${brewery.city}, ${brewery.state}<br> ${brewery.country} ${brewery.postal_code}`;
  return p;
};

window.onload = () => showBreweries();
