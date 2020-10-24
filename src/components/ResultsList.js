import React from "react"
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native"
import {useNavigation} from "@react-navigation/native"
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({title, restaurants})=>{
    const {navigate} = useNavigation();
    if (!restaurants.length) return null
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor={res=>res.id}
                renderItem={({ item })=>{
                    return (
                        <TouchableOpacity onPress={()=>navigate('ResultsShow', {id: item.id})}>
                            <ResultsDetail restaurant={item}/>
                        </TouchableOpacity>
                        )
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    titleStyle:{
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    container: {
        marginVertical: 5
    }
})

export default ResultsList