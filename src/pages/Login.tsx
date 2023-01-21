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
  FormControl,
  Collapse,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import {
  auth,
  googleAuthProvider,
  loginWithCredentials,
} from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useFormAnimation, useMyAnimation } from "../lib/animations";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Formik, Field, useFormik, Form } from "formik";
import * as yup from "yup";
import { signOut } from "firebase/auth";
import {
  signInWithGoogle,
  CreateAccountWithCredentials,
} from "../lib/firebase";
import { SignInForm } from "@/components/SiginForm";
import { RegisterForm } from "@/components/RegisterForm";

const Login = () => {
  const [user] = useAuthState(auth);

  const { animation, startAnimation } = useMyAnimation();

  const [showLogin, setshowLogin] = useState(false);

  const { formAnimation, startFormAnimation } = useFormAnimation();

  const toast: any = useToast();
  

  const runAnimations = async () => {
    if (user) {
      await startFormAnimation();
      startAnimation();
    }
  };

  useEffect(() => {
    runAnimations();
  }, [user]);

  return (
    <>
      {" "}
      <HStack justifyContent={"space-between"} w={"100%"} h={"100vh"}>
        <Image
          objectFit={"cover"}
          as={motion.img}
          alt=""
          borderRightRadius={"40%"}
          w={"50vw"}
          h={"100vh"}
          animate={animation}
          initial={{ width: "50vw" }}
          src={"/fugi.jpg"}
        />

        <VStack
          animate={formAnimation}
          as={motion.div}
          gap={"1rem"}
          pt={"10%"}
          w={"50vw"}
          h={"100vh"}
        >
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

          <>
            {showLogin ? <SignInForm /> : <RegisterForm />}

            {showLogin && (
              <Text>
                don&apos;t have an account?{" "}
                <Link
                  onClick={() => setshowLogin(!showLogin)}
                  fontWeight={"bold"}
                >
                  Sign up here
                </Link>
              </Text>
            )}
            {!showLogin && (
              <Text>
                have an account?{" "}
                <Link
                  onClick={() => setshowLogin(!showLogin)}
                  fontWeight={"bold"}
                >
                  sign in here!
                </Link>
              </Text>
            )}
          </>
        </VStack>
      </HStack>
    </>
  );
};

export default Login;
