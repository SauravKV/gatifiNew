import React,{ Component } from "react";
import { View, StyleSheet, Image, Text, TouchableHighlight } from "react-native";

import { RadioButton} from 'react-native-paper';
import COLORS from '../../resource/colors';
import {Picker} from '@react-native-community/picker';


const blockList=[   
    'Block ID'
];

const flatList=[   
    'Flat ID'
];

const memberTypeList = ['Owner', 'Tenant', 'AdminStaff'];
const residingStatusList = ['Staying', 'Flat Vacant', 'Rented'];

export  class RegistrationThird extends Component{

    constructor(props){
        super(props);
        this.state = {
            apartmentName : 'Purva Fairmont Apartment',
            selectedBlock : blockList[0],
            selectedFlat : flatList[0],
            memberType : '',
            residingStatus : ''
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

                <View style={styles.addressView}>
                    <Text style={styles.apartmentName}>{this.state.apartmentName}</Text>
                    <Text style={styles.addressText}>Address line 1</Text>
                    <Text style={styles.addressText}>Address line 2 : if applicable</Text>
                    <Text style={styles.addressText}>Address line 3 : PIN, City, State</Text>
                </View>

                <View style={styles.detailsView}>
                    <Text style={styles.sectionHeader}>Fill your Details</Text>
                    <View style={styles.dropdownContainer}>

                        <View style={styles.pickerView}>
                            <Picker
                                selectedValue={this.state.selectedBlock}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => {
                                    this.setState({ selectedBlock: itemValue })
                                }}>
                                {blockList.map((block) => {
                                    return (
                                        <Picker.Item label={block} value={block} key={block} />
                                    )
                                })}
                            </Picker>
                        </View>

                        <View style={styles.pickerView}>
                            <Picker
                                selectedValue={this.state.selectedBlock}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => {
                                    this.setState({ selectedBlock: itemValue })
                                }}>
                                {flatList.map((block) => {
                                    return (
                                        <Picker.Item label={block} value={block} key={block} />
                                    )
                                })}
                            </Picker>
                        </View>

                    </View>

                    <Text style={styles.sectionHeader}>Member Type</Text>
                    <View style={styles.dropdownContainer}>
                        <RadioButton.Group
                            onValueChange={value => this.setState({ memberType: value })}
                            value={this.state.memberType}>
                            <View style={styles.radioView}>
                                <Text>{memberTypeList[0]}</Text>
                                <RadioButton
                                    color={COLORS.blackColor}
                                    value={memberTypeList[0]} />
                            </View>

                            <View style={styles.radioView}>
                                <Text>{memberTypeList[1]}</Text>
                                <RadioButton
                                    color={COLORS.blackColor}
                                    value={memberTypeList[1]}
                                />
                            </View>

                            <View style={styles.radioView}>
                                <Text>{memberTypeList[2]}</Text>
                                <RadioButton
                                    color={COLORS.blackColor}
                                    value={memberTypeList[2]}
                                />
                            </View>
                        </RadioButton.Group>

                    </View>

                    <Text style={styles.sectionHeader}>Residing Status</Text>
                    <View style={styles.dropdownContainer}>
                        <RadioButton.Group
                            onValueChange={value => this.setState({ residingStatus: value })}
                            value={this.state.residingStatus}>
                            <View style={styles.radioView}>
                                <Text>{residingStatusList[0]}</Text>
                                <RadioButton
                                    color={COLORS.blackColor}
                                    value={residingStatusList[0]}
                                />
                            </View>

                            <View style={styles.radioView}>
                                <Text>{residingStatusList[1]}</Text>
                                <RadioButton
                                    color={COLORS.blackColor}
                                    value={residingStatusList[1]}
                                />
                            </View>

                            <View style={styles.radioView}>
                                <Text>{residingStatusList[2]}</Text>
                                <RadioButton
                                    color={COLORS.blackColor}
                                    value={residingStatusList[2]}
                                />
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
        flex:3,
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
    addressView : {
        flex:5
    },
    apartmentName : {
        color: COLORS.lightBlackColor,
        fontSize: 25,
        fontWeight : 'bold'
      },
      addressText : {
        color: COLORS.lightBlackColor,
        fontSize: 15,
        margin:10
      },
      sectionHeader : {
        color: COLORS.lightBlackColor,
        fontSize: 18,
        margin:10
      },
      detailsView : {
        flex:15,
        justifyContent:'flex-end'
    },
    dropdownContainer : {
        flexDirection : 'row'
    },
    pickerView : {
        flex:1,
        borderColor: COLORS.blackColor,
        borderWidth:1,
        borderRadius:10,
        margin:10
    },
    picker : {
        height: 40, width: '95%',  
    },
    radioView : {
        flexDirection : 'row',
        margin:10,
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
})
export default RegistrationThird