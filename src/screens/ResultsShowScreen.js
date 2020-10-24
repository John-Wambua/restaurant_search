import React, {useEffect, useState} from "react"
import {Text, StyleSheet, FlatList, Image} from "react-native"
import yelp from "../api/yelp";

const ResultsShowScreen = ({route})=>{
    const {id} = route.params
    const [restaurant, setRestaurant] = useState(null)

    useEffect(()=>{
        getRestaurant(id)
    },[id])

    const getRestaurant = async id=>{
        const restaurant = await yelp.get(`/${id}`)
        setRestaurant(restaurant.data)
    }
    if (!restaurant) return <Text>...Loading</Text>
    return (
        <>
            <Text>{restaurant.name}</Text>
            <FlatList
                data={restaurant.photos}
                keyExtractor={photo=>photo}
                renderItem={({item})=>{
                    return <Image
                        source={{
                            uri: item,
                            height: 200,
                            width :200
                        }}
                    />
                }}
            />
        </>
    )
}

const styles=StyleSheet.create({})
export default ResultsShowScreen