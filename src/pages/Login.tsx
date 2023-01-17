import {
  HStack,
  Center,
  VStack,
  Heading,
  Box,
  Container,
  Text,
  Button,
  Input,
  Link,
  useToast,
} from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { Image } from "@chakra-ui/react";
import { auth, googleAuthProvider } from "../lib/firebase";
import { } from 'react-firebase-hooks/auth'
const Login = () => {
  const toast = useToast();
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      toast({ title: "welcome to Fly ✈️", status: "success", duration: 1000 });
    } catch (error) {}
  };

  return (
    <>
      {" "}
      <HStack justifyContent={"space-between"} w={"100%"} h={"100vh"}>
        <Image
          alt=""
          borderRightRadius={"40%"}
          w={"50vw"}
          h={"100vh"}
          src={
            "https://wallpapershome.com/images/wallpapers/fuji-3840x2160-4k-hd-wallpaper-japan-travel-tourism-national-10326.jpg"
          }
        />

        <VStack gap={"1rem"} pt={"10%"} w={"50vw"} h={"100vh"}>
          <Heading>Welcome to Fly</Heading>
          <Text color={"darkgrey"}>
            Continue with Google or Enter your details
          </Text>
          <Button
            onClick={signInWithGoogle}
            variant={"outline"}
            colorScheme="black"
          >
            <Image
              alt=""
              borderRadius={"50%"}
              w={5}
              h={5}
              mr={3}
              src={"/google.png"}
            />
            login with google
          </Button>
          <Text>or</Text>
          <Input placeholder="Email" w={"50%"} />
          <Input placeholder="Password" w={"50%"} />
          <Button
            _hover={{
              background: "#77aae5",
              color: "white",
            }}
            bg={"hotpink"}
            color={"white"}
            w={"50%"}
          >
            Login
          </Button>
          <>
            <Text>
              Don&apos;t have an account?{" "}
              <Link fontWeight={"bold"}>Sign up For free</Link>
            </Text>
          </>
        </VStack>
      </HStack>
    </>
  );
};

export default Login;
