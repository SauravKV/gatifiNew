import React, { Component } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, ImageBackground, TouchableHighlight, Dimensions, Image, CheckBox } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { mobileNumberChange } from '../Login/LoginAction'
import { loginReducer } from '../Login/LoginReducer'
const { width, height } = Dimensions.get('window');

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        }
    }

    setMobile = (mobileNumber) => {
        this.props.mobileNumberChange(mobileNumber);
    }

    render() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.firstHalfContainer}>
                    <View style={styles.firstHalfFirstcomp}>
                        <Image style={styles.imageView} source={require('../../resource/gatify-logo.png')} />

                    </View>
                    <View style={styles.firstHalfSecondcomp}>
                        <View style={styles.signInBlock}>
                            <View style={styles.signinbtn}>
                                <TouchableHighlight
                                    style={styles.buttonContainerSignIn}
                                // onPress={() => this.props.navigation.navigate('Login')}
                                >
                                    <Text style={styles.btnText}>Sign In</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.btnmiddleLine}>
                                <Text style={styles.linestyle}></Text>
                            </View>

                            <View style={styles.signupbtn}>
                                <TouchableHighlight
                                    style={styles.buttonContainerSignUp}
                                // onPress={() => this.props.navigation.navigate('Login')}
                                >
                                    <Text style={styles.btnText}>Sign Up</Text>
                                </TouchableHighlight>
                            </View>


                        </View>

                    </View>
                    <View style={styles.firstHalfThirdcomp}>
                        {/* <View style={styles.socialBlock}>
                        <View style={styles.facebookView}>
                        <TouchableHighlight
                                style={styles.facebookTouch}
                                // onPress={() => this.props.navigation.navigate('Login')}
                                >
                                <Text style={styles.socialText}>F</Text>
                                </TouchableHighlight>
                           
                        </View>
                        <View style={styles.gmailView}>
                        <TouchableHighlight
                                style={styles.gmailTouch}
                                // onPress={() => this.props.navigation.navigate('Login')}
                                >
                                <Text style={styles.socialText}>G</Text>
                                </TouchableHighlight>
                            
                        </View>
                        <View style={styles.linkedinView}>
                        <TouchableHighlight
                                style={styles.linkedinTouch}
                                // onPress={() => this.props.navigation.navigate('Login')}
                                >
                                <Text style={styles.socialText}>ln</Text>
                                </TouchableHighlight>
                            
                        </View>
                        
                        </View> */}


                    </View>




                </View>
                <View style={styles.secondHalfContainer}>
                    {/* <View style={styles.secondHalfFirstComp}>

                    <View style={[styles.optionItem,styles.secondhalfFirstView]}>
                    <View style={styles.line}>
                    </View>
                </View>

                <View style={[styles.optionItem,styles.secondhalfSecondtView]}>
                    <View>
                    <Text style={styles.optionText}>or</Text>
                    </View>
                </View>

                <View style={[styles.optionItem,styles.secondhalfThirdView]}>
                    <View style={styles.line}>
                    </View>
                </View>      
                        
                         
                    </View> */}
                    <View style={styles.secondHalfOtherComp}>
                        <View style={styles.otherfirst}>

                            <TextInput
                                style={styles.textInput}
                                placeholder="Mobile number(10 digit)/Email address"
                                onChangeText={text => this.setMobile(text)}
                                keyboardType='number-pad'
                            ></TextInput>
                        </View>
                        <View style={styles.othersecond}>
                            <TouchableHighlight
                                style={styles.buttonContainerLoginOTP}
                                onPress={() => this.props.navigation.navigate('Home')}
                            >
                                <Text style={styles.otpbtn}>Sign In using OTP</Text>
                            </TouchableHighlight>

                        </View>
                        <View style={styles.otherthird}>
                            <CheckBox
                                disabled={false}
                                value={this.state.isChecked}
                                onValueChange={() => this.state.isChecked ? this.setState({ isChecked: false }) : this.setState({ isChecked: true })}>
                            </CheckBox>
                            <View>
                                <Text style={styles.fullcondition}> I agree to the
                            <Text style={styles.termCondition}> Terms of Service </Text>
                                    and
                            <Text style={styles.termCondition}> Privacy Policy </Text>
                                </Text>
                            </View>

                        </View>
                        <View style={styles.otherfour}>
                            <View style={styles.refertext}>
                                <Text style={styles.underlinetext}>
                                    <Text style={{ color: 'blue', textDecorationLine: 'underline' }}> Refer </Text>
                                    a Society and win exciting gifts
                        </Text>
                            </View>


                        </View>
                    </View>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    firstHalfContainer: {
        flex: 1,
        marginTop: 45,
        //backgroundColor:'red',
    },
    secondHalfContainer: {
        flex: 1.4,
        // backgroundColor:'yellow',
    },
    firstHalfFirstcomp: {
        flex: 2,
        // backgroundColor:'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 3

    },
    firstHalfSecondcomp: {
        flex: 2,
        justifyContent: 'center',

    },
    firstHalfThirdcomp: {
        flex: 2,
        justifyContent: 'center',


    },
    firstHalffourthcomp: {
        flex: 1,
        //backgroundColor:'yellow',

    },

    imageView: {
        width: 150,
        height: 60,
    },
    buttonContainerSignIn: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        width: 110,
        borderRadius: 30,
        backgroundColor: '#ffe066',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    buttonContainerSignUp: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        width: 110,
        borderRadius: 30,
        borderWidth: 1,
        borderStyle: 'solid',

    },
    buttonContainerLoginOTP: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        width: width - 50,
        backgroundColor: '#ff6666'
    },
    termCondition: {
        color: '#ff6666'

    },
    fullcondition: {
        fontWeight: 'bold',

    },
    facebookTouch: {

        height: 60,
        //flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        borderRadius: 50,
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#400080',


    },
    gmailTouch: {

        height: 60,
        //flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        borderRadius: 50,
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#ff0000'

    },
    linkedinTouch: {
        height: 60,
        //flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        borderRadius: 50,
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#4d79ff'

    },
    signInBlock: {
        flexDirection: 'row'
    },
    signupbtn: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 50,



    },
    signinbtn: {
        flex: 1,
        marginLeft: 50,


    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    otpbtn: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff'
    },
    btnmiddleLine: {
        alignItems: 'center',
        justifyContent: 'center',


    },
    linestyle: {
        borderWidth: 1.2,
        borderStyle: 'solid',
        height: 30,
        marginTop: 8
    },
    socialBlock: {
        flexDirection: 'row',
        flex: 1,
    },
    facebookView: {
        flex: 1,
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
        // borderBottomColor: 'black',
        // borderBottomWidth: 1.5,   
        // justifyContent:'center'

    },
    gmailView: {
        flex: 1,
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
        // borderBottomColor: 'black',
        // borderBottomWidth: 1.5,   
        // justifyContent:'center'

    },
    linkedinView: {
        flex: 1,
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
        // borderBottomColor: 'black',
        // borderBottomWidth: 1.5,   
        // justifyContent:'center'

    },
    googleView: {
        flex: 1,
        // backgroundColor:'green'
    },
    linkinView: {
        flex: 1,
        // backgroundColor:'blue'

    },
    socialText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    customborder: {
        borderWidth: 1.2,
        borderStyle: 'solid',
    },
    secondHalfFirstComp: {
        flexDirection: 'row'
    },
    optionItem: {
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    line: {
        height: 2,
        width: 110,
        backgroundColor: '#000000'
    },
    secondhalfSecondtView: {
        flex: 0.5,
        //alignItems:'center'

    },
    secondhalfThirdView: {
        flex: 1,
        // backgroundColor:'green',


    },
    secondhalfFirstView: {
        flex: 1,

    },
    secondHalfOtherComp: {
        flex: 1,
        // backgroundColor:'red'
    },
    customeBordercontainer: {
        flex: 1,
        //flexDirection:'row'
    },
    textboder: {
        marginTop: 10
    },
    optionText: {
        color: '#808080'
    },
    otherfirst: {
        flex: 3,
        //backgroundColor:'green',
        justifyContent: 'flex-end'
    },
    othersecond: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
        // backgroundColor:'yellow'
    },
    otherthird: {
        flex: 1,
        // backgroundColor:'blue',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'

        //alignItems: 'center', 
    },
    otherfour: {
        flex: 3,
        justifyContent: 'flex-end',
        marginBottom: 29,
        alignItems: 'center'
        //backgroundColor:'red'
    },
    textInput: {
        textAlign: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginLeft: 14,
        marginRight: 14
        // alignSelf:'center',
    },
    refertext: {
        //backgroundColor:'red',
        justifyContent: 'flex-end',
        //color:'gray'
    },
    underlinetext: {
        color: 'gray'
    }

});

const mapStateToProps = (state) => {
    return {
        mobileNumber: state.loginReducer.mobileNumber
    };
};

const mapDispatchToProps = (dispatch) => (
    {
        mobileNumberChange: (mobileNumber) => {
            dispatch(mobileNumberChange(mobileNumber));
        },
    });
export default connect(mapStateToProps, mapDispatchToProps)(Login)
