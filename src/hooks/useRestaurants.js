import yelp from "../api/yelp";
import {useEffect, useState} from "react";

export default ()=> {
    const [restaurants, setRestaurants] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    useEffect(() => {
        console.log("Hello")
        searchApi('beef')
    }, [])
    const searchApi = async searchTerm => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    // latitude: -1.286389,
                    // longitude: 36.817223,
                    location: 'san jose'
                }
            })
            setRestaurants(response.data.businesses)
        } catch (e) {
            setErrorMessage("Something went wrong :(")
        }
    }
    return [searchApi, restaurants, errorMessage]
}