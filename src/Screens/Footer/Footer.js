import React,{Component} from 'react'
import {View,StyleSheet,Text,Image,Dimensions,TouchableOpacity} from 'react-native';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

function CusFooter(){
    const navigation = useNavigation();
    
        return(
            <>
                <View style={styles.container}>
                    <View style={styles.firstComp}>
                    <View style={styles.homeBlock}>
                    <Image style={styles.imagestyle}  source={require('../../resource/glogo.png')}/>
                    <Text style={styles.textstyle}> Home</Text>
                    </View>
                    <View style={styles.complexBlock}>
                    <Icon name="building" size={30} color="#565454" />
                    <Text style={styles.textstyle}>My Complex</Text>
                    </View>
                    
                    <View style={styles.noticeBlock}>
                    <Icon name="envelope" size={30} color="#565454" />
                    <Text style={styles.textstyle}>Notice Box</Text>
                    </View>
                    <View style={styles.timelineBlock}>
                    <Icon name="clock-o" size={30} color="#565454" />
                    <Text style={styles.textstyle}>Visits</Text>
                    </View>
                    
                </View>
            </View>
            
            </>
        )
    
}



const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    firstComp:{
        flexDirection:'row',
        marginHorizontal:10,
        marginVertical:15,
       //backgroundColor:'red',
      flex:1
    },
    homeBlock:{
        flex:1,
       // backgroundColor:'red',
       alignItems:'center'
    },
    
    complexBlock:{
        flex:1,
        alignItems:'center',
        //backgroundColor:'yellow',
    },
    noticeBlock:{
        flex:1,
        alignItems:'center',
       // backgroundColor:'green',
    },
    timelineBlock:{
        flex:1,
        alignItems:'center',
        //backgroundColor:'red',
    },
    imagestyle:{
        width:30,
        height:30
    },
    textstyle:{
        fontSize:12,
        fontWeight:'600'
    }
   
})

export default CusFooter