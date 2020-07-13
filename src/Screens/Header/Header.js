import React,{Component} from 'react'
import {View,StyleSheet,Text,Image,Dimensions,TouchableOpacity} from 'react-native';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-community/picker';

function CusHeader(){
    const navigation = useNavigation();
    
        return(
            <>
                <View style={styles.container}>
                    <View style={styles.firstComp}>
                    <View style={styles.barBlock}>
                        <Icon name="bars" size={28} color="#565454" />
                    </View>
                    <View style={styles.pickerBlock}>
                        <View  style={styles.pickerstyles}>
                            <Picker
                            style={{height:28,color:'gray'}}
                        >
                            <Picker.Item label="Developer" value="developer" />
                            <Picker.Item label="Manager" value="manager" />
                            <Picker.Item label="Your Role" value="Your Role" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.settingBlock}>
                    <Icon name="cog" size={28} color="#565454" />
                    </View>
                    <View style={styles.bellBlock}>
                    <Icon name="bell" size={28} color="#565454" />
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
       //backgroundColor:'red',
      flex:1
    },
    barBlock:{
        flex:1,
    },
    pickerBlock:{
        flex:5,
    },
    settingBlock:{
        flex:1,
        alignItems:'flex-end'
    },
    bellBlock:{
        flex:1,
        alignItems:'flex-end'
    },
     pickerstyles:{
        borderWidth:1,
        height:28,
    },
   
})

export default CusHeader