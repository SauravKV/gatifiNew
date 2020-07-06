import React ,{Component} from 'react'
import {View,StyleSheet,Image,Text} from 'react-native'


const ImageHeader =()=>{
    return(
        <View style={styles.container}>
            <View style={styles.imageview}>
                <Image style={styles.imagestyle}  source={require('../../resource/gatify-logo.png')}/>
            </View>
        </View>
       
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    imageview:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
    },
    imagestyle:{
        width:150,
        height:60,
       
    },
})
export default ImageHeader