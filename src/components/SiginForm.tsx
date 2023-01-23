import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import {
  Input,
  Button,
  VStack,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { loginWithCredentials } from "@/lib/firebase";

interface FormValues {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const [show, setShow] = React.useState(false);
  const toast = useToast();
  const handleClick = () => setShow(!show);

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      loginWithCredentials(
        email,
        password,
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack gap={5} w={"50vw"} h={"100%"}>
        <Input
          maxW={400}
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!(formik.touched.email && formik.errors.email)}
          aria-invalid={!!(formik.touched.email && formik.errors.email)}
          aria-describedby={`error-email`}
        />
        {formik.touched.email && formik.errors.email ? (
          <div id={`error-email`}>{formik.errors.email}</div>
        ) : null}
        <InputGroup maxW={400}>
          <Input
            maxW={400}
            id="password"
            name="password"
            type={show ? "text" : "password"}
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={!!(formik.touched.password && formik.errors.password)}
            aria-invalid={!!(formik.touched.password && formik.errors.password)}
            aria-describedby={`error-password`}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {formik.touched.password && formik.errors.password ? (
          <div id={`error-password`}>{formik.errors.password}</div>
        ) : null}
        <Button
          w={400}
          colorScheme="blue"
          type="submit"
          disabled={formik.isSubmitting}
        >
          Signin
        </Button>
      </VStack>
    </form>
  );
};
