import { HStack, IconButton, Text,Icon } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

interface LayoutProps {
  children: React.ReactNode;
}

function MenuIcon(){

    
    return <Icon bg={'white'} color={'black'} as={AiOutlineMenu}/>
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
      <HStack
        position={"fixed"}
        top={0}
        bg={"red"}
        ml={"5rem"}
        w={"100%"}
        h={"4rem"}
      >
        <IconButton bg={'white'} color={'black'} icon={<MenuIcon/>} rounded={'lg'} aria-label={'menu button'}/>
      </HStack>
    </>
  );
};
