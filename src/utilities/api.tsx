const handleApiCall = async (routeCall: string) => {
    let url: string = `https://api.punkapi.com/v2/beers/${routeCall}`;
    try {
        const fetchResult = await fetch(url);
        const jsonData = await fetchResult.json();
        return jsonData;
    } catch (error) {
        console.log(error)
    }
}

export default handleApiCall;

// Random:
// https://api.punkapi.com/v2/beers/random

// Single 
// https://api.punkapi.com/v2/beers/1

// Get beers
// https://api.punkapi.com/v2/beers

// const handleApiFlagsCall = async (country: string) => {
//   try {
//     const fetchResult = await fetch(
//       `https://restcountries.com/v3.1/name/${country}?fields=name,flags`
//     )



