import React from 'react';
import { View, Text,Image, StyleSheet,TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop:50,
    },
    title:{
      marginTop: 0,
      marginLeft: 0,
      paddingVertical: 8,
      borderWidth: 2,
      borderColor: '#20232a',
      borderRadius: 6,
      backgroundColor: '#61dafb',
      color: '#20232a',
      textAlign: 'center',
      fontSize: 12,
      fontWeight: 'bold',
    },
    profile:{
        width:100,
        height:100,
    },
    absoluteView: {
      flex: 1,
      marginTop: 650,
      marginLeft: 325,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent'
  },
});
const HomeScreen = () => {
    return (
      // <View style={styles.container}>
    //     <Image
    //       style={styles.profile}
    //       source={require('./assets/profilepic.png')}
    //     />
    //     <Text style={styles.title}>Profile</Text>
    //   </View>
    // );
    <TouchableOpacity style={styles.profile}>
        <View style={styles.absoluteView}>
            <Text style={styles.title}>Profile</Text>
            <Image source={require('./assets/profilepic.png')}  style={styles.profile}/>
        </View>
        {/* <Image source={require('./assets/profilepic.png')}  style={styles.profile}/> */}
    </TouchableOpacity>
    );
  };
export default HomeScreen