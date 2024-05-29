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
import { FaUser } from "react-icons/fa6";

const TopNav = ({ title }) => {
  return (
    <Box>
      <HStack
        maxW={"1280px"}
        h={"16"}
        justify={"space-between"}
        px={"32"}
        mx={"auto"}
      >
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
