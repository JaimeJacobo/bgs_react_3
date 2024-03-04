import { useEffect, useState } from "react";
import handleApiCall from "../utilities/api";
import { Beer } from "../types/beers";

function AllBeers(){

    const [dataApi, setDataApi] = useState<Beer | undefined>(undefined);

    useEffect(() => {
        const callApi = async () => {
            const fetchApi = await handleApiCall();
            setDataApi(fetchApi)
        }
        callApi()
    },[])

    return(
        <div>
            <h1>All Beers</h1>
        </div>
    )
};
export default AllBeers