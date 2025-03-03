//https://api.openbrewerydb.org/breweries

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