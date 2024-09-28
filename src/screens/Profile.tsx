import React, { useEffect, useState } from "react";
import { Dimensions, Platform, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, VStack, HStack, ScrollView } from "@gluestack-ui/themed";
import CustomTextField from "../components/TextField";
import CustomButton from "../components/Button";
import Icon from "../components/IconPack";
import { colors } from "../styles/color";
import { fonts_styles } from "../styles/font";
// import {signIn, signOut, getCurrentUser} from 'aws-amplify/auth';
import { useAuth } from "../navigation";
import UploadBox from "../components/Modal/UploadBox";
const { width: screenW, height: screenH } = Dimensions.get("window");
const width = screenW / screenH > 0.9 ? screenW * 0.6 : screenW;
const height = screenH;

const Profile = ({ navigation }: any) => {
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
  const [name, setName] = useState("");
  const [phone, setPhoneNo] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [fileUri_front, setFileUri_front] = useState<{
    s3Path: string | null;
    prev: string | null;
    curr: string | null;
  }>({ s3Path: null, prev: null, curr: null });
  async function handleProfile() {
    if (isLoading) return;

    try {
      setIsLoading(true);
      setErrMsg("");
      //setIsUserAuth(true);
      navigation.navigate("BioMatrics");
      // const signInResponse = await signIn({
      //   username: email.trim().toLowerCase(),
      //   password: password,
      // });
      // console.log('signInResponse', signInResponse);

      // if (signInResponse.nextStep.signInStep === 'CONFIRM_SIGN_UP') {
      //   setIsLoading(false);
      //   navigation.navigate('OTP', {
      //     username: email,
      //     password: password,
      //     isResend: true,
      //   });
      //   return;
      // }
      //setIsUserAuth(true);
    } catch (err: any) {
      console.log("Error in sign-in...", err);
      const message = (err as any).toString().split(":").pop().trim();
      console.log("error...", err);

      // wrong
      setErrMsg("Incorrect username or password");
      // other
      setErrMsg("Sorry! Please try again later");
    }
    setIsLoading(false);
  }
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
        <VStack space="2xl">
          <VStack space="sm" alignItems="center">
            <Text
              style={fonts_styles.bold}
              color={colors.txtColor_bg}
              size="3xl"
            >
              Profile
            </Text>
          </VStack>

          <VStack space="xl" marginTop={30}>
            <CustomTextField
              placeholder="Name"
              value={name}
              backgroundColor={colors.gray}
              borderColor={colors.txtColor_bg}
              onChangeText={(text) => setName(text.trim().toLowerCase())}
            />
            <CustomTextField
              placeholder="Email"
              value={email}
              backgroundColor={colors.gray}
              borderColor={colors.txtColor_bg}
              onChangeText={(text) => setEmail(text.trim().toLowerCase())}
            />
            <CustomTextField
              placeholder="PhoneNo"
              value={phone}
              backgroundColor={colors.gray}
              borderColor={colors.txtColor_bg}
              onChangeText={(text) => setPhoneNo(text.trim().toLowerCase())}
            />

            <CustomTextField
              placeholder="DOB"
              value={dob}
              backgroundColor={colors.gray}
              borderColor={colors.txtColor_bg}
              onChangeText={(text) => setDob(text.trim().toLowerCase())}
            />
            <VStack space="xl">
              <Text color={colors.txtColor_bg} size="2xl" fontWeight="$medium">
                Please submit your Selfie
              </Text>

              {/* {isResubmit && reSubmitMsg && (
              <HStack
                bgColor="#EAD2D2"
                padding={20}
                borderRadius={10}
                alignItems="center">
                <Icon type="info" size={20} color={colors.error} />
                <Text color={colors.onboardingTxt} ml={10} flex={1}>
                  {reSubmitMsg}
                </Text>
              </HStack>
            )} */}

              <VStack space="md">
                <UploadBox
                  placeholder="Upload Selfie"
                  onReturnUri={(uri) => {
                    setFileUri_front((prev) => ({ ...prev, curr: uri }));
                  }}
                  uri={fileUri_front.curr || ""}
                  isLoading={isLoading}
                />
              </VStack>

              {/* <CustomTextField
              type="password"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
            /> */}
            </VStack>
          </VStack>
        </VStack>

        <VStack space="md">
          {errMsg && (
            <Text
              textAlign="center"
              color={colors.txtColor_danger}
              style={fonts_styles.medium}
            >
              {errMsg}
            </Text>
          )}
          <VStack marginTop={13}>
            <CustomButton
              text="NEXT"
              action={handleProfile}
              loading={isLoading}
              backgroundColor={colors.btnBgColor_secondary}
              textColor={colors.white}
              disable={!(email && phone)}
            />
          </VStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
