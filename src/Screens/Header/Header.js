import React,{Component} from 'react'
import {View,StyleSheet,Text,Image,Dimensions,TouchableOpacity} from 'react-native';
const {width, height} = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';

function CusHeader(){
    const navigation = useNavigation();
    
        return(
            <View><Text>Header</Text></View>
           
        )
    
}



const styles=StyleSheet.create({
   
})

export default CusHeader