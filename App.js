/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState}from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  StatusBar,
  Alert,

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const MyStack = () => {


  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Assignment2' }}
        />
        <Stack.Screen name="Second"
        component={AboutScreen}
        options={{title:"About Screen "}}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
    
  
  );
};

const HomeScreen = ({navigation})=>{

 const[room_size,setRoomSize]=useState('');
 const[price,setPrice]=useState('');
 const[installation,setInstallation]=useState('90');
 
return(
<View style={styles.container}>
    <Text>Home Screen</Text>
    <Button 
    title="go to About screen"
    onPress={()=>{
    navigation.navigate('Second')
    }}/>
    <View>
      
  <Text>Enter the room size:</Text>
  <TextInput style={styles.input}  placeholder="room_size" keyboardType="numeric"  onChangeText={(val)=>setRoomSize(val)} />
  <Text>Enter price per unit of flooring:</Text>
  <TextInput style={styles.input} placeholder="Price"  keyboardType="numeric"onChangeText={(val)=>setPrice(val)}/>
  <Text>Enter Installation price</Text>
  <TextInput style={styles.input} placeholder="installation_Price"  keyboardType="numeric" onChangeText={(val)=>setInstallation(val)}/>
  <Text>room_size:{room_size},price:{price},Installation:{installation}</Text>

  
    
  <Button title="Flooring_cost"onPress={()=>alert(room_size*price)} />
  <Button title="Installation cost" onPress={()=>alert(room_size * installation)}  />
  <Button title="total cost" onPress={()=>alert((room_size*price)+(room_size*installation))}/>
  <Button title="tax" onPress={()=> alert (room_size*price+room_size*installation*.13)}/>
  </View>
  </View>
  
  );
};

const AboutScreen=({navigation})=>{
  return(
    <View>
    <Text>AboutScreen</Text>
    <Button
    title="Back to main"
    onPress={()=>{navigation.goBack();}}/>
    <Text>My name is Afsana Bilkis Ritu. My student_id is 101165654</Text>
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'

  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200

  }

});

export default MyStack;
