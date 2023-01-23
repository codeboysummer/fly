import {
  HStack,
  IconButton,
  Text,
  Icon,
  Input,
  InputLeftElement,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { SearchIcon } from "@chakra-ui/icons";

interface LayoutProps {
  children: React.ReactNode;
}

function MenuIcon() {
  return (
    <Icon
      bg={"white"}
      color={"black"}
      w={10}
      h={10}
      borderRadius={10}
      p={2}
      size={"lg"}
      _hover={{ bg: "black", color: "white" }}
      as={AiOutlineMenu}
    />
  );
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;

const Navbar = () => {
  return (
    <>
      <HStack position={"fixed"} top={0} ml={"5rem"} w={"100%"} h={"4rem"}>
        <MenuIcon />
        <InputGroup>
          <Input bg={"white"} w={60} placeholder="Search..." />
          <InputRightElement width="4.5rem">
            <IconButton
            icon={<SearchIcon/>}
              h="1.75rem"
              size="sm"
              aria-label={"Search"}
            ></IconButton>
          </InputRightElement>
        </InputGroup>
      </HStack>
    </>
  );
};
