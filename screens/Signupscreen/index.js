import { Pressable } from "react-native";
import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput, TouchableHighlight } from "react-native";

const pressed = ({
  navigation
}) => {
  console.log("pressed");
};

const Signup = ({
  navigation
}) => {
  return <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{
        fontWeight: 900,
        fontSize: 17
      }}>Sign up</Text>
      </View>
      <View>
        <View style={styles.emailContainer}>
          <Text style={{
          fontWeight: 500
        }}>Email address</Text>
          <Input placeholder='Email' />
        </View>
        <View style={styles.mb20}>
          <Text style={{
          fontWeight: 500
        }}>Password</Text>
          <Input placeholder='Enter' />
        </View>
        <View style={styles.mb20}>
          <Text style={{
          fontWeight: 500
        }}>Confirm password</Text>
          <Input placeholder='Enter' />
        </View>

        
        
        
      </View>
      <View style={styles.footerContainer}>
        <Text style={{
        fontSize: 10
      }}>Already have an account? </Text>
        <TouchableOpacity onPress={pressed}>
          <Pressable onPress={() => navigation.navigate("Untitled1")}><Text style={{
            fontSize: 10
          }}>Login</Text></Pressable>
        </TouchableOpacity>
      </View>
    <Text style={{
      left: 84,
      top: 296,
      position: "absolute",
      width: 26,
      height: 17,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      opacity: 0.8
    }}>Or</Text><View style={{
      left: 23,
      top: 253,
      position: "absolute",
      height: 33,
      width: 140,
      backgroundColor: "#000000",
      borderRadius: 12,
      color: "#777777"
    }}></View><Text style={{
      position: "absolute",
      left: 42,
      top: 263,
      width: 100,
      height: 20,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      color: "#ffffff",
      textAlign: "center"
    }}>Signup</Text></View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: "#fff"
  },
  heading: {
    alignSelf: "center"
  },
  headingText: {
    fontSize: 42,
    fontWeight: "500"
  },
  emailContainer: {
    marginBottom: 10
  },
  mr10: {
    marginRight: 10,
    marginBottom: 10
  },
  mb20: {
    marginBottom: 20
  },
  forgotPassword: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40
  },
  loginContainer: {
    width: "80%",
    alignSelf: "center"
  },
  orContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
    alignSelf: "center"
  },
  line: {
    height: 1,
    width: 100,
    backgroundColor: "rgba(0, 0, 0, 0.05)"
  },
  orText: {
    marginVertical: 40,
    alignSelf: "center",
    fontSize: 16,
    color: "#231F20",
    opacity: 0.5
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    alignSelf: "center",
    justifyContent: "space-between"
  },
  iconContainer: {
    height: 40,
    width: 40,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F7F7F7"
  },
  icon: {
    height: 18,
    width: 18
  },
  footerContainer: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "row"
  },
  footerText: {
    color: "#6B6B6B"
  }
});
export default Signup;

const Button = props => {
  return <TouchableHighlight onPress={props.onPress} underlayColor='#DDDDDD'>
      <Pressable onPress={() => navigation.navigate("Untitled2")}><View style={[btnStyles.button, {
        backgroundColor: props.backgroundColor ? props.backgroundColor : "#000000",
        height: props.height ? props.height : 49,
        borderWidth: props.borderWidth ? props.borderWidth : 0,
        borderColor: props.borderColor ? props.borderColor : "#000000"
      }]}>
        <Text style={[btnStyles.text, {
          color: props.color ? props.color : "#ffffff"
        }]}>{props.children}</Text>
      </View></Pressable>
    </TouchableHighlight>;
};

const btnStyles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  text: {
    fontWeight: "bold",
    fontSize: 15
  }
});

const Input = props => {
  return <View>
      <TextInput style={{
      left: 0,
      top: 0
    }} placeholder={props.placeholder} value={props.value} onChangeText={num => props.setValue(num)} placeholderTextColor='#ddd' editable={props.editable !== false} />
      {props.errorText ? <Text style={textStyles.error}>{props.errorText}</Text> : null}
    </View>;
};

const textStyles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    height: 53,
    borderColor: "#C4C4C4",
    color: "#000",
    borderRadius: 10,
    fontSize: 14,
    borderWidth: 1,
    paddingHorizontal: 10
  },
  error: {
    fontSize: 13,
    color: "#FA060D",
    paddingTop: 8
  }
});