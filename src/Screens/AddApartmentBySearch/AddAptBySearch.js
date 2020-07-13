import React , {Component} from 'react';
import {View,TextInput,Text,ScrollView,StyleSheet,Dimensions,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageHeader from '../../Components/RegistrationComp/HeaderImg'
const {width, height} = Dimensions.get('window');

export class AddAptFromSearch extends Component{
    constructor(props){
        super(props);
        this.state={
            search:'',
            name:'Arjun Singh'
        }
    }
    searchName=(searchText)=>{
        this.props.searchAction(searchText);
    }

    render(){
        return (
            // <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.container}>
                <View style={styles.firstHalf}>
                    <View style={styles.firsthalfElemParent}>
                       <ImageHeader />
                        <View style={styles.welcomeview}>
                            <Text style={styles.textstyle}>Welcome</Text>
                            <Text style={styles.textstyle}>{this.state.name}</Text>          
                        </View>
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
                                    onChangeText={(text)=>this.searchName(text)}
                                    >
                                    </TextInput>
                                </View>
                            </View>
                            
                            
                        </View>
                    </View>
                </View>
                <View style={styles.secondHalf}>
                    <View style={styles.secondHalfFirstpart}></View>
                    <View style={styles.secondHalfSecondpart}>
                        <View style={styles.footertextStyle}>
                            <View>
                                <Text style={styles.outertext}>if your apartment is not available in search</Text>
                            </View>  
                            <View>
                                <Text style={styles.outertext}>You can refer or register a apartment</Text>
                            </View>   
                        </View>
                        <View style={styles.footerBtn}>
                        <TouchableHighlight
                                style={styles.buttonContainerLoginOTP}
                             onPress={() => this.props.navigation.navigate('Registraion one')}
                                >
                            <View style={styles.btnComp}>
                                <Icon name="plus" size={12} color="#0E1F0E" /> 
                                <Text style={styles.btnText}>Register Your Apartment</Text>   
                            </View>
                        </TouchableHighlight>    
                        </View>
                        <View style={styles.footerref}>
                            <Text style={styles.reftext}>Register a Apartment</Text> 
                        </View>
                    </View>
                </View>
            </View>
            // </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
      },
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    firstHalf:{
        flex:4,
    },
    firsthalfElemParent:{
        flex:1,
    },
    
    welcomeview:{
        flex:1,
        justifyContent:'center',
        paddingLeft:33,
    },
    textstyle:{
        fontSize:20,
        fontWeight:'bold',
        padding:1,
        color:'#565454'
    },
    serachview:{
        flex:1,
       // backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
        
    },
    searchCompStyle:{
        //flex:1,
        //backgroundColor:'#fff',
        flexDirection:'row',
        alignSelf:'center',
        borderWidth:1,
        width:width-90,
        borderRadius:50
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
    secondHalf:{
        flex:6,
        
    },
    secondHalfFirstpart:{
        flex:6,
       
    },
    secondHalfSecondpart:{
        flex:4,
        //backgroundColor:'gray'
    },
    footertextStyle:{
        flex:1,
        alignItems:'center',
    },
    footerBtn:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    btnComp:{
        flexDirection:'row',
        width:width-90,
        backgroundColor:'#5AB758',
        height:35,
        justifyContent:'center',
        alignItems:'center'
    },
    footerref:{
        flex:1,
        alignItems:'center'
    },
    btnText:{
        paddingLeft:5,
        fontSize:14,
        //fontWeight:'bold',
        color:'#0E1F0E'
    },
    outertext:{
        color:'#9B9898',
        lineHeight:22,
       //marginTop:4
    },
    reftext:{
        color:'#668cff', 
        textDecorationLine:'underline' ,
        fontWeight:'bold',
        fontSize:12
    }
})



export default AddAptFromSearch