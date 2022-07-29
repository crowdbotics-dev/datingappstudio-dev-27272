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
      left: 65,
      top: 55,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 25,
      borderRadius: 0,
      fontWeight: 700
    }}>Login</Text><Text style={{
      left: 23,
      top: 108,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Login</Text><TextInput style={{
      left: 23,
      top: 132,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }} placeholder="Enter Email"></TextInput><View style={{
      left: 33,
      top: 209,
      position: "absolute",
      height: 33,
      width: 140,
      backgroundColor: "#000000",
      borderRadius: 12,
      color: "#777777"
    }}></View><Text style={{
      position: "absolute",
      left: 48,
      top: 220,
      width: 100,
      height: 20,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      color: "#ffffff",
      textAlign: "center"
    }}>Login</Text><Pressable onPress={() => navigation.navigate("Untitled2")}><Text style={{
        left: 32,
        top: 302,
        position: "absolute",
        width: 100,
        height: 29,
        lineHeight: 14,
        fontSize: 14,
        borderRadius: 0,
        textAlign: "center"
      }}>SIgnup</Text></Pressable><TextInput style={{
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30,
      left: 27,
      top: 166
    }}></TextInput></View>;
};

export default Untitled1;