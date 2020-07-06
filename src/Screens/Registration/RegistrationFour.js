import React,{ Component } from "react";
import { View, StyleSheet, Image, Text, TouchableHighlight } from "react-native";
import COLORS from '../../resource/colors';
import {Picker} from '@react-native-community/picker';
import { RadioButton, ProgressBar} from 'react-native-paper';
import { FlatList, TextInput } from "react-native-gesture-handler";

const formatList=[   
    'Block Prefix - Floor Number - Flat sequence'
];


export class RegistrationFour extends Component{

    constructor(props){
        super(props);
        this.state = {
            apartmentName : 'Purva Fairmont Apartment',
            selectedFormat : formatList[0],
            dataSource : [{id : 1,  prefix : 'A-' },{id : 2,  prefix : 'B-' },{id : 3, name:'Example: Arjun', prefix : 'Ar-' }]
        }

    }

    ListViewItemSeparator = () => {
        return(
            <View style={{height:10, width:'100%'}}></View>
        )
    }

    renderHeader = () => {
        return(
            <View style={styles.headerStyle}>
                <Text  style={[styles.headerTitle, {flex:1}]}>No.</Text>
                <Text style={[styles.headerTitle, {flex:3}]}>Name</Text>
                <Text style={[styles.headerTitle, {flex:2}]}>Flat prefix</Text>
          </View>
        )
    }

    renderItem = (item) =>{
        return(
            <View style={styles.item_style}>
                    <TextInput
                        style={[styles.textInput, {flex:1, fontWeight:'bold'}]}
                        placeholder="No"
                        value = {item.id.toString()}
                    ></TextInput>

                    <TextInput
                         style={[styles.textInput, {flex:3}]}
                        placeholder="Name of Block"
                        value = {item.name}
                    ></TextInput>

                    <TextInput
                         style={[styles.textInput, {flex:2}]}
                        placeholder="Contact Person Name"
                        value = {item.prefix}
                    ></TextInput>
            </View>
        )
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
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Text style={styles.headerText}>Apartment Registration</Text>
                    </View>
                    <View style={{flex:1, justifyContent:'center'}}>
                        <Text style={styles.headerText}>Block Naming Details</Text>
                    </View>
                </View>



                <View style={styles.detailsView}>


                <FlatList
                style={styles.flatlist}
                data={this.state.dataSource}
                ListHeaderComponent={this.renderHeader}
                ItemSeparatorComponent={this.ListViewItemSeparator}
                renderItem={({ item }) => this.renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
                />
                </View>

                <View style={{flex:10}}>

                    <Text style={styles.sectionHeader}>Flat Naming Format</Text>
                    <View style={styles.dropdownContainer}>

                        <View style={styles.pickerView}>
                            <Picker
                                selectedValue={this.state.selectedBlock}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => {
                                    this.setState({ selectedBlock: itemValue })
                                }}>
                                {formatList.map((block) => {
                                    return (
                                        <Picker.Item label={block} value={block} key={block} />
                                    )
                                })}
                            </Picker>
                        </View>

                    </View>

                    <View style={styles.progressBarView}>
                        <ProgressBar style={styles.progressBar}
                            progress={1} color={COLORS.darkGrayColor} />

                    </View>

                            <View style={{flex:5}}>
                            <TouchableHighlight
                        style={[styles.buttonContainer, styles.registerButton]}
                        onPress={() => this.onClickListener('sign_up')}>
                        <Text style={styles.optionText}> Finish Registration</Text>
                    </TouchableHighlight>
                            </View>
                  

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
        flex:4,

    },
    headerText : {
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
        fontWeight: 'bold',
        fontSize: 22,
        margin:10,
        alignSelf:'center'
      },
      detailsView : {
        flex:8,
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
      progressBar : {
          height:10,
          width:'50%',
          borderRadius:10,
          alignSelf:'center'
      },
      progressBarView :{
          flex : 2,
          justifyContent:'center',
      },
      flatlist : {    
        margin:10, 

    },
    headerStyle: {
        flexDirection:'row',
        height: 45,
      },
      item_style: {
        flexDirection:'row',
        height: 45,
      },
      headerTitle : {
        flex:1, 
        height:'100%',
        textAlign:'center', 
        textAlignVertical:'center',
        fontWeight :'bold'
    },
    textInput : {
        flex:1,
        height :40,
        margin :10,
        padding :10,
        borderColor: COLORS.darkGrayColor,
        borderWidth:1,
        borderRadius:6,
        alignSelf:'center',  
     
    },
})

export default RegistrationFour