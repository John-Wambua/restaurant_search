import React, {useState} from "react"
import {View, Text, StyleSheet,ScrollView} from "react-native"
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";

const SearchScreen = ()=>{
    const [term, setTerm] = useState("")
    //Custom Hook
    const [searchApi, restaurants, errorMessage] = useRestaurants()

    const filterRestaurantsByPrice = price=>{
        return restaurants.filter(res=> res.price ===price)
    }

    return(
        <>
            <SearchBar
                term={term}
                onTermChange={newTerm=>setTerm(newTerm)}
                onTermSubmit={()=>searchApi(term)}
            />
            {errorMessage ? <Text style={{alignSelf: 'center'}}>{errorMessage}</Text>: null}
            <ScrollView>
                <ResultsList
                    title={"Cost Effective"}
                    restaurants={filterRestaurantsByPrice('$')}
                />
                <ResultsList
                    title={"Bit Pricier"}
                    restaurants={filterRestaurantsByPrice('$$')}

                />
                <ResultsList
                    title={"Big Spender"}
                    restaurants={filterRestaurantsByPrice('$$$')}
                />
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({})

export default SearchScreen