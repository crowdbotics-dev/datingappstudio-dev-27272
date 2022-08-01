import { CheckBox } from "react-native-elements";
import { Pressable } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  return <View style={{
    backgroundColor: "#ffffff",
    padding: 10,
    position: "relative",
    height: "100%",
    borderRadius: 0
  }}>
      <Text style={{
      left: 58,
      top: 32,
      position: "absolute",
      width: 100,
      height: 31,
      lineHeight: 14,
      fontSize: 25,
      borderRadius: 0,
      fontWeight: 700
    }}>Login</Text><Text style={{
      left: 22,
      top: 79,
      position: "absolute",
      width: 130,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Login</Text><TextInput style={{
      left: 21,
      top: 97,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }} placeholder="Enter Email"></TextInput><Pressable onPress={{}}><View style={{
        left: 24,
        top: 234,
        position: "absolute",
        height: 33,
        width: 140,
        backgroundColor: "#000000",
        borderRadius: 12,
        color: "#777777"
      }}></View></Pressable><Text style={{
      position: "absolute",
      left: 50,
      top: 253,
      width: 100,
      height: 20,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      color: "#ffffff",
      textAlign: "center"
    }}>Login</Text><Pressable onPress={() => navigation.navigate("Untitled2")}><Text style={{
        left: 95,
        top: 300,
        position: "absolute",
        width: 73,
        height: 20,
        lineHeight: 14,
        fontSize: 10,
        borderRadius: 0,
        textAlign: "center"
      }}>Signup</Text></Pressable><Text style={{
      left: 21,
      top: 143,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Password</Text><TextInput style={{
      left: 20,
      top: 156,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }} placeholder="Enter Password"></TextInput><Text style={{
      left: 114,
      top: 193,
      position: "absolute",
      width: 77,
      height: 15,
      lineHeight: 14,
      fontSize: 10,
      borderRadius: 0,
      opacity: 0.61
    }}>Forgot password</Text><CheckBox title="Show " style={{
      position: "absolute",
      left: 0,
      top: 190
    }} size={10}></CheckBox><Text style={{
      left: 20,
      top: 310,
      position: "absolute",
      width: 149,
      height: 26,
      lineHeight: 14,
      fontSize: 10,
      borderRadius: 0
    }}>Dont have an account?</Text><Text style={{
      left: 79,
      top: 290,
      position: "absolute",
      width: 17,
      height: 16,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      opacity: 0.7
    }}>Or</Text></View>;
};

export default Untitled1;