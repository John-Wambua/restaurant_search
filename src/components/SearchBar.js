import React, {useState} from "react"
import {View, StyleSheet, TextInput} from "react-native"
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit})=>{
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                style={styles.inputStyle}
                autoCapitalize={"none"}
                autocorrect={"false"}
                placeholder={"Search"}
                onChangeText={newTerm=>onTermChange(newTerm)}
                value={term}
                onEndEditing={()=>onTermSubmit()}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    backgroundStyle: {
        marginVertical: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    inputStyle: {
     fontSize: 18,
      flex: 1
    },
    iconStyle: {
        fontSize: 40,
        color: 'black',
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar