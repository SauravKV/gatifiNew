import React , {Component} from 'react'
import {View,StyleSheet,ScrollView,TouchableHighlight,TextInput,Image,Text,Dimensions,CheckBox,KeyboardAvoidingView} from 'react-native'
import ImageHeader from '../../Components/RegistrationComp/HeaderImg'
import RegTextHeader from '../../Components/RegistrationComp/RegistrationHeaderText'
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width,height} = Dimensions.get('screen');
export class RegistrationTwo extends Component{
    constructor(){
        super();
        this.state={
            mobile:'',
            isChecked:false
        }
    }
    render(){
        return(
            // <KeyboardAvoidingView
            // behavior="padding"
            // style={{flex:1}}
            // >
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
                    <View style={styles.secondpartCompContianer}>
                        <View style={styles.textView}>
                            <View style={styles.textfirsthalfcontainer}>
                                <TextInput
                                style={styles.inputstyles}
                                placeholder="No.of Blocks"
                                keyboardType='default'
                                >
                                </TextInput>
                            </View>
                            <View style={styles.textsecondhalfcontainer}>
                                <TextInput
                                style={styles.inputnumberstyles}
                                placeholder="Number"
                                keyboardType='phone-pad'
                                >
                                </TextInput>
                            </View>
                            
                         </View>

                         <View style={styles.textView}>
                            <View style={styles.textfirsthalfcontainer}>
                                <TextInput
                                style={styles.inputstyles}
                                placeholder="Total No.of flats"
                                keyboardType='default'
                                >
                                </TextInput>
                            </View>
                            <View style={styles.textsecondhalfcontainer}>
                                <TextInput
                                style={styles.inputnumberstyles}
                                placeholder="Number"
                                keyboardType='phone-pad'
                                >
                                </TextInput>
                            </View>
                            
                         </View>

                         <View style={styles.textView}>
                            <View style={styles.textfirsthalfcontainer}>
                                <TextInput
                                style={styles.inputstyles}
                                placeholder="No.of Entry Gates "
                                keyboardType='default'
                                >
                                </TextInput>
                            </View>
                            <View style={styles.textsecondhalfcontainer}>
                                <TextInput
                                style={styles.inputnumberstyles}
                                placeholder="Number"
                                keyboardType='phone-pad'
                                >
                                </TextInput>
                            </View>
                            
                         </View>
                         <View style={styles.textView}>
                            <View style={styles.textfirsthalfcontainer}>
                                <TextInput
                                style={styles.inputstyles}
                                placeholder="No.of Exist Gates "
                                keyboardType='default'
                                >
                                </TextInput>
                            </View>
                            <View style={styles.textsecondhalfcontainer}>
                                <TextInput
                                style={styles.inputnumberstyles}
                                placeholder="Number"
                                keyboardType='phone-pad'
                                >
                                </TextInput>
                            </View>
                            
                         </View>
                         <View style={styles.textView}>
                            <View style={styles.textfirsthalfcontainer}>
                                <TextInput
                                style={styles.inputstyles}
                                placeholder="No.of Security Staff"
                                keyboardType='default'
                                >
                                </TextInput>
                            </View>
                            <View style={styles.textsecondhalfcontainer}>
                                <TextInput
                                style={styles.inputnumberstyles}
                                placeholder="Number"
                                keyboardType='phone-pad'
                                >
                                </TextInput>
                            </View>
                            
                         </View>

                         <View style={styles.amenityText}>
                             <Text style={{fontWeight:'400',fontSize:16}}>Amenities List</Text>
                         </View>
                         <View style={styles.checkboxView}>
                            <View style={styles.checkboxtext}>
                            <CheckBox 
                            disabled={false}
                            value={this.state.isChecked}
                            onValueChange={() => this.state.isChecked ? this.setState({ isChecked: false }) : this.setState({ isChecked: true })}>
                            </CheckBox>
                            <Text style={styles.Swimming}>Swimming Pool </Text>
                            </View>
                            <View style={styles.checkboxtext}>
                            <CheckBox 
                            disabled={false}
                            value={this.state.isChecked}
                            onValueChange={() => this.state.isChecked ? this.setState({ isChecked: false }) : this.setState({ isChecked: true })}>
                            </CheckBox>
                            <Text style={styles.Swimming}>Gym </Text>
                            </View>
                            <View style={styles.checkboxtext}>
                            <CheckBox 
                            disabled={false}
                            value={this.state.isChecked}
                            onValueChange={() => this.state.isChecked ? this.setState({ isChecked: false }) : this.setState({ isChecked: true })}>
                            </CheckBox>
                            <Text style={styles.Swimming}>Club </Text>
                            </View>
                         </View>
                         <View style={styles.checkboxView}>
                            <View style={styles.checkboxtext}>
                            <CheckBox 
                            disabled={false}
                            value={this.state.isChecked}
                            onValueChange={() => this.state.isChecked ? this.setState({ isChecked: false }) : this.setState({ isChecked: true })}>
                            </CheckBox>
                            <Text style={styles.Swimming}>Child Play area </Text>
                            </View>
                            <View style={styles.checkboxtext}>
                            <CheckBox 
                            disabled={false}
                            value={this.state.isChecked}
                            onValueChange={() => this.state.isChecked ? this.setState({ isChecked: false }) : this.setState({ isChecked: true })}>
                            </CheckBox>
                            <Text style={styles.Swimming}>Table Tennis </Text>
                            </View>
                            <View style={styles.viewMore}>
                            
                            <Text style={styles.Swimming}>View More </Text>
                            <Icon name="angle-down" size={22} color="blue" />
                            </View>
                         </View>
                         
                    </View>
                    
                </View>
                <View style={styles.thirdpart}>
                <View style={styles.Progressbar}>
                            <View style={styles.progressbarfirst}></View>
                            <View style={styles.progressbarsecond}></View>
                        </View>
                        
                        <View style={styles.btnCont}>
                        <View style={styles.btnReg}>
                        <Text style={styles.btnText}>Continue Registration >></Text> 
                        </View>
                        </View>
                        
                </View>
            </View>
            </ScrollView>
            // </KeyboardAvoidingView>
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
    amenityText:{
        marginLeft:10,
        marginTop:16,

    },
    Swimming:{
        fontSize:12,
    },
    checkboxView:{
        flexDirection:'row',
       
    },
    checkboxtext:{
        flex:1,
        flexDirection:'row',
        //justifyContent:'center',
        alignItems:'center',
        fontSize:11,
        // backgroundColor:'red'
        //marginLeft:15,
    },
    viewMore:{
        flex:1,
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
    secondpartCompContianer:{
        flex:1,
    },
    textView:{
        flexDirection:'row',
        
    },
    textfirsthalfcontainer:{
        flex:6,
        //backgroundColor:'gray',
        justifyContent:'center',
        borderWidth:1,
        margin:10,
        height:38,
    },
    textsecondhalfcontainer:{
        flex:4,
        //backgroundColor:'red',
        justifyContent:'center',
        // borderWidth:1,
        margin:10,
        height:38,
        //width:5
    },
    inputstyles:{
        paddingLeft:10,
       // textAlign:'center'
    },
    inputnumberstyles:{
        paddingLeft:10,
        borderWidth:1,
        width:"75%"

        
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
        flex:7,
        borderBottomLeftRadius:50,
        borderTopLeftRadius:50,
        backgroundColor:'gray'
    },
    progressbarsecond:{
        flex:3,

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

export default RegistrationTwo