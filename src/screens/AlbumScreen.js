import React from "react";
import { View, FlatList ,StyleSheet,Text,Image} from "react-native";
import Header from "../components/Header";
import AlbumDetail from "../components/AlbumDetail";
import albumData from "../json/albums.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
      data={albumData.albumList}
      renderItem={({ item }) => 
      <AlbumDetail 
        album={item}       
        navigation={navigation}
      />}
      keyExtractor={item => item.title}
      />

      <View style={styles.tab}> 
      <View style={styles.tabbottom}>
            <Image
                source={{uri :"https://i.imgur.com/dgBchnt.png"}}
                style={styles.home}
            />
            <Text style={styles.t_home}>Home</Text>
      </View>
      <View style={styles.tabbottom}>
            <Image
                source={{uri :"https://i.imgur.com/mykE58D.png"}}
                style={styles.mybook}
            />
            <Text style={styles.t_mybook}>My Book</Text>
      </View>
      <View style={styles.tabbottom}>
            <Image
                source={{uri :"https://i.imgur.com/D3VQRAI.png"}}
                style={styles.favorite}
            />
            <Text style={styles.t_favorite}>Favorite</Text>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
  tabbottom:{
    flexDirection:"column",
    backgroundColor:'#FBFCFC',
    height:60,
    width:140,
    padding:12,


},
tab:{
  flexDirection:"row",
  justifyContent:"flex-start"
},
home:{
    width:25,
    height:22,
    marginLeft:45
},
mybook:{
  width:25,
  height:22,
  marginLeft:25
  
},
favorite:{
  width:25,
  height:22,
  marginLeft:5
},
t_home:{
  color:'#818181',
  fontSize:14,
  marginLeft:40 
},
t_mybook:{
  color:'#00b49f',
  fontSize:16,
  fontWeight:"bold",
  marginLeft:5

},
t_favorite:{
  color:'#818181',
  fontSize:14,
  marginLeft:-5
}
  
});
export default AlbumScreen;
