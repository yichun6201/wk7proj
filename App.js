import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem}from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Image,TouchableOpacity,StyleSheet,Text} from 'react-native';
import { Tile } from 'react-native-elements';

import HomeScreen from './src/screens/HomeScreen';
import AlbumScreen from './src/screens/AlbumScreen';
import DetailScreen from './src/screens/DetailScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import MeScreen from './src/screens/MeScreen';
import albumData from "./src/json/albums.json";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const HomeStack = ({navigation}) => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: 'Home',
            headerStyle: { backgroundColor: '#00b49f' },
            headerTitleStyle: {
              color:"#FFF",
              fontWeight: '400',
              fontSize: 20
            },
            headerLeft:()=> 
            <TouchableOpacity 
            onPress={() => navigation.openDrawer()}>
             <Image style={{width:50,height:50,marginLeft:10}} source={require('./src/img/choice.png')}/>
           </TouchableOpacity>,
            headerRight: () => (
              <Image style={{width:50,height:50,marginRight:10}} source={require('./src/img/search.png')}/>        
            ),           
          }}
        />  
      </Stack.Navigator>
  );
}

const AlbumStack = ({navigation}) => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={AlbumScreen} 
          options={{
            headerStyle: { backgroundColor: '#00b49f' },
            title: albumData.albumTitle,
            headerTitleStyle:{
              color:"#FFF",
              fontWeight: '400',
              fontSize: 20
            }, 
            headerLeft:()=> 
            <TouchableOpacity 
            onPress={() => navigation.openDrawer()}>
             <Image style={{width:50,height:50,marginLeft:10}} source={require('./src/img/choice.png')}/>
           </TouchableOpacity>,
            headerRight: () => (
              <Image style={{width:50,height:50,marginRight:10}} source={require('./src/img/search.png')}/>        
            ), 
          }}
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen}
          options={({ route }) => ({ 
            title: route.params.title,
            headerStyle: {
              backgroundColor: '#4F9DEB',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },  
           })}
        />      
      </Stack.Navigator>
  );
}

const MeStack = ({navigation}) => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Me" 
          component={MeScreen} 
          options={{
            title: 'Me',
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            }, 
            headerLeft: () => (
              <View style={{marginLeft: 20}}>
              <Ionicons 
                name={'ios-menu'} 
                size={30} 
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),            
          }}
        />  
      </Stack.Navigator>
  );
}

const SettingsStack = ({navigation}) => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            title: 'Settings',
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
            headerLeft: () => (
              <View style={{marginLeft: 20}}>
              <Ionicons 
                name={'ios-menu'} 
                size={30} 
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),              
          }}
        />  
      </Stack.Navigator>
  );
}

// const CustomDrawerAnimatedContent = ({ progress, ...rest }) => {
//   const translateX = Animated.interpolate(progress, {
//     inputRange: [0, 1],
//     outputRange: [-100, 0],
//   });

//   return (
//     <DrawerContentScrollView {...props}>
//       <Animated.View style={{ transform: [{ translateX }] }}>
//         <DrawerItemList {...props} />
//       </Animated.View>
//     </DrawerContentScrollView>
//   );
// }

const CustomDrawerContent = ({ ...props }) => {
  return (

    <DrawerContentScrollView {...props}>
        <View style={styles.bg3}>
         <Image
          style={{width:70,height:70,marginTop:37,marginLeft:13}}
          source={{uri:"https://i.imgur.com/tJ7vVmF.png"}}/>
         <Text style={{fontSize:16,color:"#FFF",marginLeft:25,marginTop:10}}>GamexHCl</Text>
         <Text style={{fontSize:16,color:"#FFF",marginLeft:25,marginTop:10}}>gdlab2017@gmail.com</Text>
        </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerStyle={{ width: 304,}}
        drawerContentOptions={{
          activeBackgroundColor: '#00b49f',
          activeTintColor:'#fff',
          itemStyle: { marginLeft: 0, marginRight: 0},
          labelStyle: { fontSize: 20 },
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeStack} 
          options={
            {
              drawerLabel: 'Home',
              drawerIcon: ({ focused }) => (
                focused
                ?<Image
                source={{uri :"https://i.imgur.com/oLeVTnj.png"}}
                style={{width:24, height: 24, marginLeft:10}}
              />
                :<Image
                  source={{uri :"https://i.imgur.com/dgBchnt.png"}}
                  style={{width:24, height: 24, marginLeft:10}}
                />
              ),            
            }
          }
          />
        <Drawer.Screen 
          name="MyBook" 
          component={AlbumStack} 
          options={
            {
              drawerLabel: 'My Book',
              drawerIcon: ({ focused }) => (
                focused
                ?<Image
                  source={{uri :"https://i.imgur.com/e6II5yG.png"}}
                  style={{width:24, height: 24, marginLeft:10 }}
                />
                :<Image
                  source={{uri:"https://i.imgur.com/SI4uOLv.png"}}
                  style={{width:24, height: 24, marginLeft:10 }}
                />
              ),            
            }
          }
          />
        <Drawer.Screen 
          name="Favorite" 
          component={MeStack} 
          options={
            {
              drawerLabel: 'Favorites',
              drawerIcon: ({ focused }) => (
                focused
                ?<Image
                  source={{uri :"https://i.imgur.com/5ILmW8A.png"}}
                  style={{width:24, height: 24,marginLeft:10 }}
                />
                :<Image
                source={{uri :"https://i.imgur.com/D3VQRAI.png"}}
                style={{width:24, height: 24, marginLeft:10 }}
              />
              ),           
            }
          }
        />    
        <Drawer.Screen 
          name="Settings" 
          component={SettingsStack} 
          options={
            {
              drawerLabel: 'Settings',
              drawerIcon: ({ tintColor }) => (
                <Image
                  source={{uri :"https://i.imgur.com/NsQHuGr.png"}}
                  style={{width:24, height: 24, tintColor: tintColor, marginLeft:10 }}
                />
              ),            
            }
          }
        />
        <Drawer.Screen 
          name="Aboutus" 
          component={SettingsStack} 
          options={
            {
              drawerLabel: 'About us',
              drawerIcon: ({ tintColor }) => (
                <Image
                  source={{uri :"https://i.imgur.com/jgfLSA0.png"}}
                  style={{width:24, height: 24, tintColor: tintColor, marginLeft:10 }}
                />
              ),            
            }
          }
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
bg3:
{
  backgroundColor:"#00b49f",
  width:304,
  height:180
}
});
export default App;