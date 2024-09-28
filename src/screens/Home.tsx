import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, VStack, HStack, ScrollView } from "@gluestack-ui/themed";
import CustomTextField from "../components/TextField";
import CustomButton from "../components/Button";
import Icon from "../components/IconPack";
import { colors } from "../styles/color";
import { fonts_styles } from "../styles/font";
// import {signIn, signOut, getCurrentUser} from 'aws-amplify/auth';
import { useAuth } from "../navigation";
import { View, Button, StyleSheet, Dimensions } from "react-native";

const { width: screenW, height: screenH } = Dimensions.get("window");
const width = screenW / screenH > 0.9 ? screenW * 0.6 : screenW;
const height = screenH;

const Home = ({ navigation }: any) => {
  const { setIsUserAuth } = useAuth();
  //   async function handleSignOut() {
  //     try {
  //       await signOut();
  //       setIsUserAuth(false);
  //     } catch (error) {
  //       console.log('Error signing out: ', error);
  //     }
  //   }
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const listItems = [
    {
      id: 1,
      location: "Location A",
      time: "10:00 AM",
      description: "A short description of Location A",
    },
    {
      id: 2,
      location: "Location B",
      time: "11:00 AM",
      description: "A short description of Location B",
    },
    {
      id: 3,
      location: "Location C",
      time: "12:00 PM",
      description: "A short description of Location C",
    },
  ];
  useEffect(() => {
    // getCurrentUser().then(async user => {
    //   if (user) {
    //     await handleSignOut();
    //   }
    // });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bgColor }}>
      <ScrollView
        bounces={false}
        style={{ alignSelf: "center", width: width }}
        contentContainerStyle={{
          flexGrow: 1,
          padding: 20,
          minHeight: height * 0.9,
        }}
      >
        <Text style={fonts_styles.bold} color={colors.txtColor_bg} size="3xl">
          BioLogist
        </Text>

        <Text
          style={fonts_styles.bold}
          color={colors.txtColor_bg}
          marginBottom={20}
          size="xl"
        >
          Hi John your Shifts
        </Text>
        {listItems.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.location}</Text>
            <Text style={styles.itemTime}>Time: {item.time}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Button title="Start" />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemTime: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 16,
    color: "#777",
    marginBottom: 10,
  },
});
export default Home;
