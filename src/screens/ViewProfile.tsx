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
import { Cake, Mail, Phone, User } from "lucide-react-native";
import { Image } from "@gluestack-ui/themed";
const logo = require("../assets/profile.jpeg");

const { width: screenW, height: screenH } = Dimensions.get("window");
const width = screenW / screenH > 0.9 ? screenW * 0.6 : screenW;
const height = screenH;
const size_sm = 130;
const default_stroke = 1.75;
const ViewProfile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bgColor }}>
      <ScrollView
        bounces={false}
        style={{ alignSelf: "center", width: width }}
        contentContainerStyle={{
          flexGrow: 1,

          minHeight: height * 0.9,
        }}
      >
        {/* Profile Header Section */}
        <View style={styles.profileHeader}>
          <Image
            alt="xwallet"
            source={logo}
            resizeMode="contain"
            style={{
              height: size_sm, // Set height and width the same
              width: size_sm, // Width is the same as height to make it a square
              borderRadius: size_sm / 2, // Half of the size to make it round
              overflow: "hidden",
              marginBottom:20 // Ensures the image stays within the border radius
            }}
          />

          <Text style={styles.profileName}>John Deo</Text>
          <Text style={styles.profileTitle}>Senior Graphic Designer</Text>
        </View>

        {/* Social Media Links Section */}
        <View style={styles.socialContainer}>
        <VStack space="md">
          <View style={styles.socialRow}>
     

      
            <VStack>
              <HStack>
                <Mail color={colors.txtColor_bg} />
                <Text style={styles.socialLabel} marginLeft={10}>
                  Email
                </Text>
              </HStack>

              <Text style={styles.socialValue} marginLeft={35}>
                james012@gmail.com
              </Text>
            </VStack>
          
          </View>
          <View style={styles.socialRow}>

          <VStack >
            <HStack>
              <Phone color={colors.txtColor_bg} />
              <Text style={styles.socialLabel} marginLeft={10}>
              Phone
              </Text>
            </HStack>

            <Text style={styles.socialValue} marginLeft={35}>
            +647-641-9995
            </Text>
          </VStack>

      </View>

          

          <View style={styles.socialRow}>
          <VStack >
            <HStack>
              <Cake color={colors.txtColor_bg} />
              <Text style={styles.socialLabel} marginLeft={10}>
            DOB
              </Text>
            </HStack>

            <Text style={styles.socialValue} marginLeft={35}>
             1 Jan 1996
            </Text>
          </VStack>
          </View>
          </VStack>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileHeader: {
    backgroundColor: colors.profileHeaderBg,
    borderRadius: 20,
    padding: 20,
    margin: 3,
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: colors.white,
    borderWidth: 3,
    marginBottom: 15,
  },
  profileName: {
    fontSize: 24,
    color: colors.white,
    fontWeight: "bold",
  },
  profileTitle: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 10,
  },
  followInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  followers: {
    color: colors.white,
    fontSize: 16,
  },
  following: {
    color: colors.white,
    fontSize: 16,
  },
  socialContainer: {
    backgroundColor: colors.white,
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  socialLabel: {
    fontSize: 16,
    color: colors.iconColor,
  },
  socialValue: {
    fontSize: 16,
    color: colors.txtColor_bg,
  },
});

export default ViewProfile;
