import React ,{Component} from 'react'
import {View,StyleSheet,Text} from 'react-native'


const RegTextHeader =()=>{
    return(
        <View style={styles.container}>
            <View style={styles.regHeaderText}>
                <Text style={styles.headerText}>Apartment Registration</Text>
            </View>
        </View>
       
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    regHeaderText:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    headerText:{
        fontSize:22,
        fontWeight:"900"
        //fontWeight:'bold'
    }
   
})
export default RegTextHeader