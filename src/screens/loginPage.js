import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Linking,
  TouchableOpacity,
} from 'react-native';
const LoginPage = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.containerLeft}>
          <Text style={styles.title}>Tea Test</Text>
        </View>
        <View style={styles.containerRight}>
          <Image
            style={styles.teaTestLogo}
            source={require('../assets/TeaTestLogo.png')}
          />
        </View>
      </View>
      <View style={styles.teaCupCenter}>
        <Image style={styles.teaCup} source={require('../assets/TeaCup.png')} />
      </View>

      <View>
        <View>
          <View style={styles.textLabel1Cover}>
            <Text style={styles.textLabel1}>Email Address</Text>
          </View>
          <View style={styles.textInputCover}>
            <TextInput
              placeholder="Type Your Email Address"
              autoComplete="email"
              style={styles.textInput}></TextInput>
          </View>
        </View>
        <View style={styles.textGap}>
          <View style={styles.textLabel1Cover}>
            <Text style={styles.textLabel1}>Password</Text>
          </View>
          <View style={styles.textInputCover}>
            <TextInput
              placeholder="Type Your Password"
              style={styles.textInput}></TextInput>
          </View>
        </View>
      </View>
      <View style={styles.signInButtonCover}>
        <Button
            title="Sign In"
            onPress = { () => 
                this.props.navigation.navigate('Details')}
            color="#E9B546"
            style={styles.signInButton}>
        </Button>
    </View>
      <View  style={styles.createAccountCover}>
        <Text>
          Create account 
          <TouchableOpacity
            onPress = { () => 
                this.props.navigation.navigate('Details')}
            
            style={{fontFamily:'times new roman'}}>
               
                <Text style={styles.registerText}>Register</Text>
               
            
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flexDirection: 'row',
  },

  containerLeft: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '50%',

    height: 90,
  },

  containerRight: {
    flexDirection: 'column',
    width: '50%',
    paddingRight: 50,
  },

  title: {
    color: '#E9B546',
    fontWeight: '600',
    fontFamily: 'Lato',
    fontSize: 36,
    textShadowColor: 'black', // Set the color of the stroke
    textShadowOffset: {width: 4, height: 4}, // Adjust the offset for stroke effect
    textShadowRadius: 2,
  },

  teaTestLogo: {
    width: 90,
    height: 90,
    position: 'absolute',
    right: 0,
  },

  teaCup: {
    //backgroundColor:'red',
  },

  teaCupCenter: {
    padding: 60,
    flexDirection: 'row',
    //backgroundColor:'black',
    justifyContent: 'center',
  },

  textLabel1Cover: {
    paddingLeft: 50,
    paddingBottom: 20,
  },

  textLabel1: {
    fontFamily: 'poppins',
    fontSize: 16,
  },

  textInput: {
    borderWidth: 0.6,
    borderColor: '#2EC82B',
    borderRadius: 6,
    height: 38,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
  },

  textInputCover: {
    paddingLeft: 50,
    paddingRight: 50,
  },

  textGap: {
    paddingTop: 14,
  },

  signInButtonCover: {
    padding: 50,    
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  signInButton: {
    fontSize: 0, 
    color:"red",
  },

  createAccountCover:{
    paddingLeft: 50,
  },



  registerText:{
    textDecorationLine: 'underline',
    color: '#007AFF',
  }
});

export default LoginPage;
