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

const { width: screenW, height: screenH } = Dimensions.get("window");
const width = screenW / screenH > 0.9 ? screenW * 0.6 : screenW;
const height = screenH;

const SignIn = ({ navigation }: any) => {
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

  async function handleSignIn() {
    if (isLoading) return;

    try {
      setIsLoading(true);
      setErrMsg("");
      //setIsUserAuth(true);
      navigation.navigate("CompeleteProfile");
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
            <Icon type="XWallet_2" size={width * 0.5} />
            <Text
              style={fonts_styles.bold}
              color={colors.txtColor_bg}
              size="2xl"
            >
              Welcome Back
            </Text>
          </VStack>

          <VStack space="md">
            <CustomTextField
              placeholder="Email"
              value={email}
              backgroundColor={colors.gray}
              borderColor={colors.txtColor_bg}
             
              onChangeText={(text) => setEmail(text.trim().toLowerCase())}
            />
            <CustomTextField
              type="password"
              placeholder="Password"
              value={password}
              backgroundColor={colors.gray}
              borderColor={colors.txtColor_bg}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
              style={{ alignSelf: "flex-end" }}
            >
              <Text style={fonts_styles.medium} color={colors.txtColor_primary}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </VStack>
        </VStack>
        <VStack flex={1} justifyContent="center">
          <TouchableOpacity
            style={{
              alignSelf: "center",
              justifyContent: "center",
              marginVertical: 20,
            }}
          >
            {/* <Icon
              type={Platform.OS === "ios" ? "ScanFace" : "Fingerprint"}
              size={48}
            /> */}
          </TouchableOpacity>
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

          <CustomButton
            text="Sign In"
            action={handleSignIn}
            backgroundColor={colors.btnBgColor_secondary}
            textColor={colors.white}
            loading={isLoading}
            disable={!(email && password)}
          />

       
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
