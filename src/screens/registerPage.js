import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Linking,
  TouchableOpacity,
} from "react-native";

const RegisterPage = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.registerTitle}>Register</Text>
      </View>

      <View style={styles.list}>
        <View style={styles.row}>
            <View style={styles.columnLeft}>
                <Text style={styles.registerLabel}>First Name</Text>
            </View>
            <View style={styles.columnRight}>
                <TextInput
                placeholder="Enter your first name"
                
                style={styles.registerInputText}></TextInput>
            </View>
        </View>

        <View style={styles.row}>
            <View style={styles.columnLeft}>
                <Text style={styles.registerLabel}>Last Name</Text>
            </View>
            <View style={styles.columnRight}>
                <TextInput
                placeholder="Enter your last name"
                
                style={styles.registerInputText}></TextInput>
            </View>
        </View>

        <View style={styles.row}>
            <View style={styles.columnLeft}>
                <Text style={styles.registerLabel}>Phone Number</Text>
            </View>
            <View style={styles.columnRight}>
                <TextInput
                placeholder="Enter yout phone number"
                
                style={styles.registerInputText}></TextInput>
            </View>
        </View>

        <View style={styles.row}>
            <View style={styles.columnLeft}>
                <Text style={styles.registerLabel}>Email Address</Text>
            </View>
            <View style={styles.columnRight}>
                <TextInput
                placeholder="Enter your email address"
                
                style={styles.registerInputText}></TextInput>
            </View>
        </View>

        <View style={styles.row}>
            <View style={styles.columnLeft}>
                <Text style={styles.registerLabel}>Country</Text>
            </View>
            <View style={styles.columnRight}>
                <TextInput
                placeholder="Enter the country"
                
                style={styles.registerInputText}></TextInput>
            </View>
        </View>

        <View style={styles.row}>
            <View style={styles.columnLeft}>
                <Text style={styles.registerLabel}>DoB</Text>
            </View>
            <View style={styles.columnRight}>
                <TextInput
                placeholder="Enter your date of birth"
                
                style={styles.registerInputText}></TextInput>
            </View>
        </View>

        <View style={styles.row}>
            <View style={styles.columnLeft}>
                <Text style={styles.registerLabel}>New Password</Text>
            </View>
            <View style={styles.columnRight}>
                <TextInput
                placeholder="Enter a strong password"
                
                style={styles.registerInputText}></TextInput>
            </View>
        </View>

        <View style={styles.row}>
            <View style={styles.columnLeft}>
                <Text style={styles.registerLabel}>Confirm Password</Text>
            </View>
            <View style={styles.columnRight}>
                <TextInput
                placeholder="Enter your password again"
                
                style={styles.registerInputText}></TextInput>
            </View>
        </View>

        <View style={styles.row}>
            <View style={styles.columnLeft}>
                <Button
                title="Sign In"
                onPress = { () => 
                    this.props.navigation.navigate('Details')}
                color="#E9B546"
                style={styles.button}>
                </Button>
            </View>
            <View style={styles.columnRight}>
                <Button
                title="Sign In"
                onPress = { () => 
                    this.props.navigation.navigate('Details')}
                color="#E9B546"
                style={styles.button}>
                </Button>
            </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },

  registerTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:"Roboto",  
    padding:20,
  },

  list:{

  },

  row:{
    flexDirection: "row",
    paddingTop:30,
  },

  columnLeft:{
    flexDirection:"column",
    width: '40%',
  },

  columnRight:{
    flexDirection:"column",
    width: '60%',
    
},

registerLabel:{
    fontSize: 16,
    fontFamily:"poppins",
},

registerInputText:{
    borderWidth: 0.6,
    borderColor: '#2EC82B',
    borderRadius: 6,
    height: 38,
    backgroundColor: '#ffffff',
    paddingLeft: 8,
    paddingRight: 15,
},

button:{
    fontSize: 0, 
    color:"red",
},




});

export default RegisterPage;
