import React,{ Component } from "react";
import { StyleSheet, View, Image, TextInput, Text, TouchableHighlight, CheckBox } from "react-native";
import COLORS from '../../resource/colors';
import { RadioButton } from "react-native-paper";
import {Picker} from '@react-native-community/picker';

const statusList = ['Resident', 'Non Resident', 'Other'];
const roleList=[   
    "Contact Person's role"
];


export class RegistrationFive extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedRole : roleList[0],
          relationStatus : ''
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoView}>

                    <Image
                        style={styles.logo}
                        source={require('../../resource/gatify-logo.png')}></Image>

                    <Image
                        style={styles.settingIcon}
                        source={require('../../resource/setting.png')}></Image>

                </View>

                <View>

                    <TextInput
                        style={styles.textInput}
                        placeholder="Apartment Name"
                    ></TextInput>

                    <TextInput
                        style={styles.textInput}
                        placeholder="City"
                    ></TextInput>

                    <TextInput
                        style={styles.textInput}
                        placeholder="Contact Person Name"
                    ></TextInput>

                    <TextInput
                        style={styles.textInput}
                        placeholder="Contact person's number"
                        keyboardType='number-pad'
                    ></TextInput>

<View style={styles.pickerView}>
                            <Picker
                                selectedValue={this.state.selectedRole}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => {
                                    this.setState({ selectedRole: itemValue })
                                }}>
                                {roleList.map((block) => {
                                    return (
                                        <Picker.Item label={block} value={block} key={block} color='gray'/>
                                    )
                                })}
                            </Picker>
                        </View>

                    <View style={styles.checkboxView}>
                        <CheckBox
                            disabled={false}
                            value={this.state.isChecked}
                            onValueChange={() => this.state.isChecked ? this.setState({ isChecked: false }) : this.setState({ isChecked: true })}>
                        </CheckBox>


                        <Text style={{ color: COLORS.blackColor }} >I am the contact person</Text>


                    </View>

                    <TextInput
                        style={styles.textInput}
                        placeholder="Your Name"
                    ></TextInput>

                    <TextInput
                        style={styles.textInput}
                        placeholder="Your Number"
                        keyboardType='number-pad'
                    ></TextInput>

                    
                    <Text style={styles.sectionHeader}>Your Relation with Apartment</Text>
                    <View style={styles.radioButtonContainer}>
                        <RadioButton.Group
                            onValueChange={value => this.setState({ relationStatus: value })}
                            value={this.state.relationStatus}>
                            <View style={styles.radioView}>
                                <RadioButton
                                    color={COLORS.blackColor}
                                    value={statusList[0]}/>
                                <Text>{statusList[0]}</Text>
                            </View>

                            <View style={styles.radioView}>
                                
                                <RadioButton
                                    color={COLORS.blackColor}
                                    value={statusList[1]}
                                />
                                <Text>{statusList[1]}</Text>
                            </View>

                            <View style={styles.radioView}>

                                <RadioButton
                                    color={COLORS.blackColor}
                                    value={statusList[2]}
                                />
                                <TextInput
                                    style={styles.smallTextInput}
                                    placeholder="Other"
                                ></TextInput>
                            </View>

                        </RadioButton.Group>

                    </View>

                    <TouchableHighlight
                        style={[styles.buttonContainer, styles.registerButton]}
                        onPress={() => this.onClickListener('sign_up')}>
                        <Text style={styles.optionText}> Submit</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex :1,
        padding: 10,
        flexDirection: 'column'
    },
    logoView : {
      //  flex:3,
        flexDirection:'row',
        justifyContent:'center'
    },
    logo : {
        width : 150,
        height : 50,
        alignSelf : "center",
        margin : 30,
    },
    settingIcon : {
        width : 30,
        height : 30,
        alignSelf : "center",
        position:'absolute',
        right:0,
        backgroundColor:'red'
    },
    textInput : {
        width : '100%',
        height :40,
        margin :10,
        padding :5,
        borderColor: COLORS.darkGrayColor,
        borderWidth:1,
        borderRadius:6,
        alignSelf:'center',  
     
    },
    pickerView : {
        width : '100%',
        borderColor: COLORS.darkGrayColor,
        borderWidth:1,
        borderRadius:5,
        marginTop:10,
        marginBottom:10,
    },
    picker : {
        height: 40, width: '100%',  
    },
    radioButtonContainer : {
        flexDirection : 'row',
        padding:10
    },
    radioView : {
        flexDirection : 'row',

        alignItems:'center',
    },
    buttonContainer : {
        height:40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:'40%',
        alignSelf:'center',
        margin:20,
        borderColor: COLORS.blackColor,
        borderWidth:1,
        borderRadius:6
    },
    registerButton: {
        backgroundColor: COLORS.greenColor,
      },
      checkboxView : { 
        flexDirection: "row", 
        alignItems: 'center', 
        padding:5
      },
      smallTextInput : {
        width : '45%',
        height :40,
        borderColor: COLORS.grayColor,
        borderWidth:1,
        alignSelf:'center',  
    },
})
export default RegistrationFive