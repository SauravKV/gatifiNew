import React,{Component} from 'react'
import {View,StyleSheet,Text,Image,Dimensions,TouchableOpacity} from 'react-native';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


function CusHeaderWithSearch(){
    const navigation = useNavigation();
    
        return(
            <>
                <View style={styles.container}>
                    <View style={styles.firstComp}>
                    <View style={styles.barBlock}>
                        <Icon name="arrow-left" size={22}  />
                    </View>
                    <View style={styles.headerTextBlock}>
                        <Text style={styles.headerText}>NoticeBox</Text>
                    </View>
                    
                    <View style={styles.searchBlock}>
                    <Icon name="search" size={22}  />
                    </View>
                    
                </View>
            </View>
            
            </>
        )
    
}



const styles=StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:'red'
    },
    firstComp:{
        flexDirection:'row',
        marginHorizontal:10,
        marginVertical:15,
       backgroundColor:'#ffa366',
      flex:1
    },
    barBlock:{
        flex:1,
        justifyContent:'center',
        marginLeft:10,
    },
    headerTextBlock:{
        flex:1,
        justifyContent:'center'
    },
    
    searchBlock:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center',
        marginRight:10
    },
    headerText:{
     fontSize:16,
     fontWeight:'bold'  
    }
    
   
})

export default CusHeaderWithSearch