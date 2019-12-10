import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image, Button,TouchableOpacity
} from 'react-native';

export default function App (){
  return (
    <View>
{/* 
    <View>
    <Image source = {require("./assets/images/medicine.png")}style={styles.image}/>
    </View>   
     
     
    <View>
    <Text style = {styles.text} >
     Heart Rate
    </Text> 
    </View >  
       */}
      <View >
        <TouchableOpacity style={
          styles.btn
        }>
          <Image source={require("./assets/images/medicine.png")} style={styles.image}></Image>
          <Text style={styles.text}>Click Here To Check Pulse</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
  }

const styles = StyleSheet.create({
    image: {
      width: 300,
      height: 100,
      resizeMode: "contain"
    },
    
    text: {
      fontSize: 18,
      color: "#6c63ff",
      fontWeight: "bold",
      // marginLeft: 45,
      // marginRight:50,
      textAlign:"center"
    },
    btn: {
      marginRight: 50,
      justifyContent:"flex-start",
      resizeMode: "contain",
      height: 120,
      width: 300,
      marginTop: 100,
      marginLeft: 45,
      
    }
});
