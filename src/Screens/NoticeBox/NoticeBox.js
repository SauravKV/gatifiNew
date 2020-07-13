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
import CusHeaderWithSearch from '../Header/HeaderWIthSearch'
import SearchComp from '../../Components/SearchComp/Search'
import CusFooter from '../Footer/Footer'
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');
export class NoticeBox extends Component {

  render() {
    return (
      <>

        <View style={styles.container}>
          <View style={styles.customHeaderBlock}>
            <CusHeaderWithSearch />
          </View>


          <View style={styles.ContentBlock}>
            <View style={styles.mainMsgBlock}>
              <View style={styles.headingBlock}>
                <View style={styles.NoticeBlock}>
                  <Text style={styles.headingtxt}>Heading of Notice</Text>
                </View>
                <View style={styles.envelopmessageBlock}>
                  <Icon name="envelope-o" size={20} color="#ff6666" />
                </View>


              </View>
              <View style={styles.dateBlock}>
                <View style={styles.dateAndTimeBlock}>
                  <Text style={styles.datetxt}>Date and Time</Text>
                </View>
                <View style={styles.postBlock}>
                  <Text style={styles.datetxt}>Posted by: Ex Management</Text>
                </View>
              </View>
              <View style={styles.fileBlock}>
                <View style={styles.nameBlock}>
                  <Icon name="file-pdf-o" size={22} color="#565454" />
                  <Text style={styles.nametxt}>Name</Text>
                </View>
                <View style={styles.nameBlock}>
                  <Icon name="photo" size={22} color="#565454" />
                  <Text style={styles.nametxt}>Name</Text>
                </View>
                <View style={styles.nameBlock}>
                  <Icon name="file-text" size={22} color="#565454" />
                  <Text style={styles.nametxt}>Name</Text>
                </View>
              </View>
              <View style={styles.msgBlock}>
                <Text style={styles.msgtxt}>Message------------------------------------------Line1</Text>
                <Text style={styles.msgtxt}>Message------------------------------------------Line1</Text>
                <Text style={styles.msgtxt}>Message------------------------------------------Line1</Text>
                <Text style={styles.msgtxt}>Message------------------------------------------Line1</Text>
              </View>

            </View>
            <View style={styles.mainMsgBlock}>
              <View style={styles.headingBlock}>
                <View style={styles.NoticeBlock}>
                  <Text style={styles.headingtxt}>Heading of Notice</Text>
                </View>
                <View style={styles.envelopmessageBlock}>
                  <Icon name="envelope-o" size={20} color="#ff6666" />
                </View>


              </View>
              <View style={styles.dateBlock}>
                <View style={styles.dateAndTimeBlock}>
                  <Text style={styles.datetxt}>Date and Time</Text>
                </View>
                <View style={styles.postBlock}>
                  <Text style={styles.datetxt}>Posted by: Ex Management</Text>
                </View>
              </View>
              <View style={styles.fileBlock}>
                <View style={styles.nameBlock}>
                  <Icon name="file-pdf-o" size={22} color="#565454" />
                  <Text style={styles.nametxt}>Name</Text>
                </View>
                <View style={styles.nameBlock}>
                  <Icon name="photo" size={22} color="#565454" />
                  <Text style={styles.nametxt}>Name</Text>
                </View>
                <View style={styles.nameBlock}>
                  <Icon name="file-text" size={22} color="#565454" />
                  <Text style={styles.nametxt}>Name</Text>
                </View>
              </View>
              <View style={styles.msgBlock}>

                <Text style={styles.msgtxt}>Message------------------------------------------Line1</Text>
                <Text style={styles.msgtxt}>Message------------------------------------------Line1</Text>
                <Text style={styles.msgtxt}>Message------------------------------------------Line1</Text>
                <Text style={styles.msgtxt}>Message------------------------------------------Line1</Text>
              </View>

            </View>
            <View style={styles.mainMsgBlock}>
              <View style={styles.headingBlock}>
                <View style={styles.NoticeBlock}>
                  <Text style={styles.headingtxt}>Heading of Notice</Text>
                </View>
                <View style={styles.envelopmessageBlock}>
                  <Icon name="envelope-o" size={20} color="#ff6666" />
                </View>


              </View>
              <View style={styles.dateBlock}>
                <View style={styles.dateAndTimeBlock}>
                  <Text style={styles.datetxt}>Date and Time</Text>
                </View>
                <View style={styles.postBlock}>
                  <Text style={styles.datetxt}>Posted by: Ex Management</Text>
                </View>
              </View>
              <View style={styles.fileBlock}>
                <View style={styles.nameBlock}>
                  <Icon name="file-pdf-o" size={22} color="#565454" />
                  <Text style={styles.nametxt}>Name</Text>
                </View>
                <View style={styles.nameBlock}>
                  <Icon name="photo" size={22} color="#565454" />
                  <Text style={styles.nametxt}>Name</Text>
                </View>
                <View style={styles.nameBlock}>
                  <Icon name="file-text" size={22} color="#565454" />
                  <Text style={styles.nametxt}>Name</Text>
                </View>
              </View>
              <View style={styles.msgBlock}>
                <Text style={styles.msgtxt}>Message------------------------------------------Line1</Text>
                <Text style={styles.msgtxt}>Message------------------------------------------Line1</Text>
                <Text style={styles.msgtxt}>Message------------------------------------------Line1</Text>
                <Text style={styles.msgtxt}>Message------------------------------------------Line1</Text>
              </View>

            </View>

          </View>
          <View style={styles.customFooterBlock}>
            <CusFooter />
          </View>

        </View>

      </>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  customHeaderBlock: {
    flex: 1,

  },
  ContentBlock: {
    flex: 8,
    //backgroundColor:'yellow',
    marginHorizontal: 10
  },
  customFooterBlock: {
    flex: 1,
    // backgroundColor:'red'
  },
  mainMsgBlock: {
    borderWidth: 3,
    borderColor: '#ffd1b3',
    marginBottom: 10,
  },
  headingBlock: {
    flexDirection: 'row',
    marginHorizontal: 3,
    marginVertical: 5,
  },
  dateBlock: {
    flexDirection: 'row',
    marginHorizontal: 3,
    marginBottom: 5

  },
  dateAndTimeBlock: {
    flexDirection: 'row',
    flex: 1,
  },
  NoticeBlock: {
    flexDirection: 'row',
    flex: 3,
  },
  postBlock: {
    flexDirection: 'row',
    flex: 1,
  },
  envelopmessageBlock: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    marginRight: 3
  },

  fileBlock: {
    flexDirection: 'row',
    marginHorizontal: 3,
    marginBottom: 5,

  },
  msgBlock: {
    marginHorizontal: 3,
    marginBottom: 5,
  },
  headingtxt: {
    fontSize: 18,
    fontWeight: '600'
  },
  nameBlock: {
    flexDirection: 'row'
  },
  nametxt: {
    paddingHorizontal: 12,
    fontWeight: '600',
    fontSize: 14
  },
  datetxt: {
    fontSize: 11
  },
  headertxtBlock: {
    flexDirection: 'row',
    flex: 2,

  },
  headermsgBlock: {
    flexDirection: 'row',
    flex: 1,
  }


})

export default NoticeBox
