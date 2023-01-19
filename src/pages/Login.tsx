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
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { Image } from "@chakra-ui/react";
import { auth, googleAuthProvider } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useFormAnimation, useMyAnimation } from "../lib/animations";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const [user] = useAuthState(auth);

  const { animation, startAnimation } = useMyAnimation();

  const [showLogin, setshowLogin] = useState(false);

  const { formAnimation, startFormAnimation } = useFormAnimation();

  const toast = useToast();

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      toast({ title: "welcome to Fly ✈️", status: "success", duration: 1000 });
    } catch (error) {}
  };

  const CreateAccountWithCredentials = async (
    email: String,
    password: String
  ) => {
    try {
      createUserWithEmailAndPassword(auth, email, password);
      toast({ title: "welcome !", status: "success", duration: 1000 });
    } catch (error) {
      console.log(error);
    }
  };

  const runAnimations = async () => {
    if (user) {
      await startFormAnimation();
      startAnimation();
    }
  };

  function Login() {
    return (
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // handle form submit here
            setSubmitting(false);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <FormControl height={"40vh"}>
              <VStack h={"100%"} gap={"10%"}>
                <Input
                  w={"50%"}
                  name="email"
                  placeholder="Email"
                  isInvalid={!!(errors.email && touched.email)}
                  aria-invalid={!!(errors.email && touched.email)}
                  aria-describedby={`error-email`}
                  id={`email`}
                  type="email"
                />
                {errors.email && touched.email ? (
                  <div id={`error-email`}>{errors.email}</div>
                ) : null}
                <Input
                  name="password"
                  w={"50%"}
                  placeholder="Password"
                  isInvalid={!!(errors.password && touched.password)}
                  aria-invalid={!!(errors.password && touched.password)}
                  aria-describedby={`error-password`}
                  id={`password`}
                  type="password"
                />
                {errors.password && touched.password ? (
                  <div id={`error-password`}>{errors.password}</div>
                ) : null}
                <Button
                  colorScheme={"blue"}
                  w={"50%"}
                  onClick={() => {}}
                  disabled={isSubmitting}
                >
                  login
                </Button>
                <Text>
                  have an account ?{" "}
                  <Link
                    onClick={() => setshowLogin(!showLogin)}
                    fontWeight={"bold"}
                  >
                    login here!
                  </Link>
                </Text>
                <Button onClick={() => signOut(auth)}>singout</Button>
              </VStack>
            </FormControl>
          )}
        </Formik>
      </>
    );
  }

  function Register() {
    return (
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            const { email, password } = values;

           await CreateAccountWithCredentials(email, password);
            // handle form submit here

            setSubmitting(false);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <FormControl height={"40vh"}>
              <VStack h={"100%"} gap={"10%"}>
                <Input
                  w={"50%"}
                  name="email"
                  placeholder="Email"
                  isInvalid={!!(errors.email && touched.email)}
                  aria-invalid={!!(errors.email && touched.email)}
                  aria-describedby={`error-email`}
                  id={`email`}
                  type="email"
                />
                {errors.email && touched.email ? (
                  <div id={`error-email`}>{errors.email}</div>
                ) : null}
                <Input
                  name="password"
                  w={"50%"}
                  placeholder="Password"
                  isInvalid={!!(errors.password && touched.password)}
                  aria-invalid={!!(errors.password && touched.password)}
                  aria-describedby={`error-password`}
                  id={`password`}
                  type="password"
                />
                {errors.password && touched.password ? (
                  <div id={`error-password`}>{errors.password}</div>
                ) : null}
                <Button
                  colorScheme={"blue"}
                  w={"50%"}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Register
                </Button>

                <Text>
                  dont have an account ?{" "}
                  <Link
                    onClick={() => setshowLogin(!showLogin)}
                    fontWeight={"bold"}
                  >
                    register for free!
                  </Link>
                </Text>
                <Button onClick={() => signOut(auth)}>singout</Button>
              </VStack>
            </FormControl>
          )}
        </Formik>
      </>
    );
  }

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

          {showLogin ? <Login /> : <Register />}
        </VStack>
      </HStack>
    </>
  );
};

export default Login;
