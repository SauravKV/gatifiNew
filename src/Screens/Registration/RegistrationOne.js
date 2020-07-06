import React , {Component} from 'react'
import {View,StyleSheet,ScrollView,TouchableHighlight,TextInput,Image,Text,Dimensions} from 'react-native'
import ImageHeader from '../../Components/RegistrationComp/HeaderImg'
import RegTextHeader from '../../Components/RegistrationComp/RegistrationHeaderText'
import {Picker} from '@react-native-community/picker';
const {width,height} = Dimensions.get('screen');
export class RegistrationOne extends Component{
    constructor(){
        super();
        this.state = {
            role: 'Your Role',
          };
    }
    render(){
        return(
            <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.container}>
                <View style={styles.firstpart}>
                    <View style={styles.firstpartFirstComp}>
                        <ImageHeader />
                    </View>
                    <View style={styles.firstpartsecondComp}>
                        <RegTextHeader />
                    </View>                   
                </View>
                <View style={styles.secondpart}>
                    <View>
                        <View style={styles.textContainer}>
                            <TextInput
                            style={styles.inputstyles}
                            placeholder="Apartment Name"
                            keyboardType='default'
                            >
                            </TextInput>
                        </View>
                        <View style={styles.textContainer}>
                            <TextInput
                            style={styles.inputstyles}
                            placeholder="City"
                            keyboardType='default'
                            >
                            </TextInput>
                        </View>
                        <View style={styles.textContainer}>
                            <TextInput
                            style={styles.inputstyles}
                            placeholder="Your Name"
                            keyboardType='default'
                            >
                            </TextInput>
                        </View>
                        <View style={styles.textContainer}>
                            <TextInput
                            style={styles.inputstyles}
                            placeholder="Mobile Number"
                            keyboardType='default'
                            >
                            </TextInput>
                        </View>
                   
                     <View  style={styles.pickerstyles}>
                        <Picker
                        style={{height:35,color:'gray'}}
                        selectedValue={this.state.role}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({role: itemValue})
                        }
                        
                        >
                        <Picker.Item label="Developer" value="developer" />
                        <Picker.Item label="Manager" value="manager" />
                        <Picker.Item label="Your Role" value="Your Role" />
                        </Picker>   
                     </View> 
                     <View style={styles.textmultiContainer}>
                            <TextInput
                            style={styles.inputmultistyles}
                            placeholder="Mobile Number"
                            keyboardType='default'
                            multiline={true}
                            >
                            </TextInput>
                        </View>
                        <View style={styles.Progressbar}>
                            <View style={styles.progressbarfirst}></View>
                            <View style={styles.progressbarsecond}></View>
                        </View>
                    
                    </View>
                </View>
                <View style={styles.thirdpart}>
                        
                        <View style={styles.btnCont}>
                        <TouchableHighlight
                             onPress={() => this.props.navigation.navigate('Sign Up')}
                                >
                        <View style={styles.btnReg}>
                        <Text style={styles.btnText}>Continue Registration >></Text> 
                        </View>
                        </TouchableHighlight>
                        </View>
                        
                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles= StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
      },
    container:{
        flex:1,
    },
    firstpart:{
        flex:2,
    },
    firstpartFirstComp:{
        flex:1,
    },
    firstpartsecondComp:{
        flex:1,
    },
    inputstyles:{
        height:38,
        paddingLeft:10,
        
        //color:'red'
    },
    textContainer:{
        borderWidth:1,
        margin:10,
        height:38,
    },
    textmultiContainer:{
        borderWidth:1,
        margin:10,
        height:38*2,
    },
    pickerstyles:{
        borderWidth:1,
        margin:10,
        height:38,
    },
    secondpart:{
        flex:6,
       // backgroundColor:'yellow'

    },
    thirdpart:{
        flex:2,
       // backgroundColor:'gray'

    },
    Progressbar:{
       // flex:1,
       flexDirection:'row',
       alignSelf:'center',
       width:width-150,
       borderRadius:50,
       borderWidth:1,
        margin:10,
        height:14,
    },
    progressbarfirst:{
        flex:4,
        borderBottomLeftRadius:50,
        borderTopLeftRadius:50,
        backgroundColor:'gray'
    },
    progressbarsecond:{
        flex:6,

    },
    btnCont:{
        flex:1,
       // justifyContent:'center',
        alignItems:'center',
        marginTop:28,
    },
    btnReg:{
        width:width-150,
        backgroundColor:'#5AB758',
        height:30,
        justifyContent:'center',
        alignItems:'center'
    },
    btnText:{
       // paddingLeft:5,
        fontSize:14,
        //fontWeight:'bold',
        color:'#0E1F0E'
    },
})

export default RegistrationOne