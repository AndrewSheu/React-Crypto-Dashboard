import {
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Box,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaUser, FaBars } from "react-icons/fa6";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px={"4"}>
      <HStack maxW={"70rem"} h={"16"} justify={"space-between"} mx={"auto"}>
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{ base: "block", lg: "none" }}
        />
        <Heading fontWeight={"medium"} fontSize={"28px"}>
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaUser} size={"24px"} />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
