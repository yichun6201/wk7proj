import React from "react";
import { ScrollView,Image, View,Text ,StyleSheet} from 'react-native';
import { ListItem } from 'react-native-elements';

// Make a component
const SettingsScreen = ({ navigation }) => {
    return (
        <View>
        <Image
        source={{uri :"https://i.imgur.com/dgBchnt.png"}}
        style={{width:150, height: 150, marginLeft:120,marginTop:200}}
      />
      <Text style={{fontSize:30,color:"gray",marginLeft:155,marginTop:10}}>HOME</Text>
      <View style={styles.tab}> 
      <View style={styles.tabbottom}>
            <Image
                source={{uri :"https://i.imgur.com/xgtoBhy.png"}}
                style={styles.home}
            />
            <Text style={styles.t_home}>Home</Text>
      </View>
      <View style={styles.tabbottom}>
            <Image
                source={{uri :"https://i.imgur.com/SI4uOLv.png"}}
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
}

const styles = StyleSheet.create({
 
    tabbottom:{
      flexDirection:"column",
      backgroundColor:'#FBFCFC',
      height:60,
      width:140,
      padding:12,
      marginTop:150
  
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
    color:'#00b49f',
    fontSize:16,
    marginLeft:35,
    fontWeight:"bold"
  },
  t_mybook:{
    color:'#818181',
    fontSize:14,
    
    marginLeft:10
  
  },
  t_favorite:{
    color:'#818181',
    fontSize:14,
    marginLeft:-5
  }
    
  });
  

export default SettingsScreen;
