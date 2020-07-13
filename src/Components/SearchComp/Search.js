import React,{Component} from 'react'
import {View,StyleSheet,Text,Image,Dimensions,TextInput} from 'react-native';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';

function SearchComp(){

    return(
        <View style={styles.serachview}>
                            <View style={styles.searchCompStyle}>
                                <View style={styles.searchicon}>
                                <Icon name="search" size={22} color="#565454" />
                                </View>
                                <View style={styles.inputView}>
                                    <TextInput
                                    style={styles.inputstyles}
                                    placeholder="Search to add your apartment"
                                    keyboardType='default'
                                    >
                                    </TextInput>
                                </View>
                            </View>
                            
                            
                        </View>
    )

}
const styles=StyleSheet.create({
    serachview:{
        flex:1,
       // backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        
    },
    searchCompStyle:{
        //flex:1,
        //backgroundColor:'#fff',
        flexDirection:'row',
        alignSelf:'center',
        borderWidth:1,
        width:width-10,
        borderRadius:50,
        // marginLeft:30,
        // marginRight:30,

    },
    searchicon:{
        paddingLeft:8,
        alignSelf:'center'
       // flex:3,
    },
    inputView:{
       // flex:7,
    },
    inputstyles:{
        // width:250,

         height:35,
        textAlign:'center',
    },
    
   
})

export default SearchComp