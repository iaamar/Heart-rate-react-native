import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default function App (){
  return (
    <View>
    <View>
    <Image source = {require("./assets/medicine.png")}style={styles.image}/>
    </View>   
     
     
    <View>
    <Text style = {styles.text} >
     Heart Rate
    </Text> 
    </View >  
      

    </View>
  );
  }

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  
    // welcomeContainer: {
    //   marginTop: 20,
    //   marginLeft: 30,
    //   marginRight: 30,
    //   marginBottom: 20
    // },
    image: {
      width: 300,
      height: 100,
      resizeMode: "contain",
      marginTop: 50,
      marginLeft: 40,
    },
    
    text: {
      alignContent: 'center',
      justifyContent:"center",
      fontSize: 24,
      color: "#6c63ff",
      fontFamily: "",
      fontWeight: "bold",
      marginLeft: 150
    }
});
