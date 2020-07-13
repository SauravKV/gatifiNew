import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Dimensions,
  ImageBackground
} from 'react-native';
import CusHeader from '../Header/Header'
import SearchComp from '../../Components/SearchComp/Search'
import CusFooter from '../Footer/Footer'
import Icon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');
export class Home extends Component {

  render(){
    return(
      <>
      
        <View style={styles.container}>
          <View style={styles.customHeaderBlock}>
           <CusHeader />
          </View>
          <View style={styles.searchBlock}>
            <SearchComp/>
          </View>
          <View style={styles.bannerBlock}>

          </View>
          <View style={styles.activityBlock}>

          </View>
          <View style={styles.menuBlock}>

            <View style={styles.firstrowMenu}>
               <View style={styles.domesticBlock}>
                    <Icon name="group" size={45} color="#565454" />
                    <Text style={styles.textstyle}>Directory</Text>
                </View>
                <View style={styles.messageBlock}>
                    <Icon name="comment-o" size={45} color="#565454" />
                    <Text style={styles.textstyle}>Message to Security</Text>
                </View>
                <View style={styles.inviteBlock}>
                    <Icon name="user-plus" size={45} color="#565454" />
                    <Text style={styles.textstyle}>Invites</Text>
                </View>
            </View>
            <View style={styles.secondrowMenu}>
            <View style={styles.domesticBlock}>
                    <Icon name="address-book" size={45} color="#565454" />
                    <Text style={styles.textstyle}>My Neighbours</Text>
                </View>
                <View style={styles.messageBlock}>
                    <Icon name="wrench" size={45} color="#565454" />
                    <Text style={styles.textstyle}>Book a Service</Text>
                </View>
                <View style={styles.inviteBlock}>
                    <Icon name="hand-pointer-o" size={45} color="#565454" />
                    <Text style={styles.textstyle}>Raise a Complain</Text>
                </View>
            </View>

          </View>
         <View style={styles.customFooterBlock}>
            <CusFooter/>
         </View>
       
       </View>
      
      </>
    
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  customHeaderBlock:{
    flex:1,
   // backgroundColor:'yellow'
  },
  searchBlock:{
    flex:0.7,
    //backgroundColor:'green'
  },
  bannerBlock:{
    flex:2.3,
   // backgroundColor:'red'
  },
  activityBlock:{
    flex:2,
    backgroundColor:'blue'
  },
  menuBlock:{
    flex:3,
    //backgroundColor:'gray',
    alignItems:'flex-end',
    justifyContent:'flex-end'
    //flexDirection:'row'
  },
  customFooterBlock:{
    flex:1,
   // backgroundColor:'red'
  },
  firstrowMenu:{
    flex:1,
    flexDirection:'row',
    alignItems:'flex-end',
   // marginVertical:29

  },
  secondrowMenu:{
    flex:1,
    flexDirection:'row',
    alignItems:'flex-end',
    marginVertical:14

  },
  domesticBlock:{
    flex:1,
    alignItems:'center',
    //backgroundColor:'yellow',
},
messageBlock:{
  flex:1,
  alignItems:'center',
},
inviteBlock:{
  flex:1,
  alignItems:'center',
},
textstyle:{
  fontSize:12,
  fontWeight:'600'
},
ccontainer: {
  width: 375,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
},
  
})

export default Home
 