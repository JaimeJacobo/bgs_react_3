const handleApiCall = async () => {
    let url: string = `https://punkapi.com/documentation/v2/beers`;
    try {
        const fetchResult = await fetch(url);
        const jsonData = await fetchResult.json();
        return jsonData;
    } catch (error) {
        console.log(error)
    }
}

export default handleApiCall;