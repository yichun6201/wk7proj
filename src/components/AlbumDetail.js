import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from "react-native";

const AlbumDetail = ({ album, navigation }) => {
  return (
    <View style={styles.cardContainerStyle}>

      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
        <View style={styles.img}>
          <Image
          style={styles.thumbnailStyle}
          source={{uri: album.thumbnail_image}}/>
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={{color:"#2e2e2e",fontSize:22,paddingTop:10}}>{album.bookname}</Text>
          <Text style={{color:"#717171",fontSize:18,marginTop:-5}}>{album.author}</Text>
          <Text style={{color:"#b1b1b1",fontSize:12,width:194,height:30,marginTop:-5,fontWeight:"regular"}}>{album.booktext}</Text>
          <Image
          style={{width:194,height:3,marginTop:-5}}
          source={{uri: album.loading}}/>
          <Text style={{color:"#b1b1b1",fontSize:16,marginTop:-5}}>{album.completed}</Text>
          <Text style={{color:"#ff6767",fontSize:16,fontWeight:"bold",marginTop:-25}}>{album.completed_r}</Text>

        </View>

      </View>
    </View>
)};

const styles = StyleSheet.create({
thumbnailContainerStyle: {
  flexDirection: "row",
  justifyContent: "flex-start",
  marginBottom:10
},
thumbnailStyle: {
  height: 140,
  width: 93,
  margin: 4,


},

img:{
  marginTop:10,
  marginLeft:10,
  height: 150,
  width: 100,
  borderColor:"#d1d1d1",
  backgroundColor:"#f8f8f8",
  shadowColor:"#d1d1d1",
  shadowOffset:{width:0,height:0},
  shadowOpacity:1
},

headerContentStyle: {
  flexDirection: "column",
  justifyContent: "space-around",
  paddingLeft: 27,

},
cardContainerStyle: {
  backgroundColor:"#FFF",
  flexDirection:"column",
  borderWidth: 1,
  borderRadius: 2,
  borderColor: "#FFF",
  shadowColor: "#FFF",
  borderColor:"#f8f8f8"

},
cardSectionStyle: {
  padding: 5,
  backgroundColor: "#FFF",
  borderColor: "#FFF",
  borderBottomWidth: 1
},
imageStyle: {
  height: 350,//image size
  width: null
},
Content1Style:{
  flexDirection:"row",
  backgroundColor:"#FFF",
  paddingLeft: 20,
  paddingTop:3,
  paddingBottom:10,

},
});

export default AlbumDetail;
