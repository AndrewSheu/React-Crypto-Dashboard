import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { LuArrowDownUp } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: LuArrowDownUp,
      text: "Trascations",
      link: "/trascations",
    },
  ];
  return (
    <Stack
      bg={"white"}
      justify={"space-between"}
      boxShadow={{ base: "none", lg: "lg" }}
      W={{ base: "full", lg: "16rem" }}
      h={"100vh"}
    >
      <Box>
        <Heading textAlign={"center"} fontSize={"20px"} as={"h1"} pt={"56px"}>
          @ANDYACCOUNT
        </Heading>
        <Box mt={"6"} mx={"3"}>
          {navLinks.map((nav) => (
            <HStack
              borderRadius={"10px"}
              mx={"3"}
              key={nav.text}
              py={"3"}
              px={"4"}
              _hover={{ bg: "#F3F3F7", color: "#171717" }}
              color={"#797E82"}
            >
              <Icon as={nav.icon} />
              <Text fontSize={"14px"} fontWeight={"medium"}>
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>

      <Box mt={"6"} mx={"3"} mb={"6"}>
        <HStack
          borderRadius={"10px"}
          mx={"3"}
          py={"3"}
          px={"4"}
          _hover={{ bg: "#F3F3F7", color: "#171717" }}
          color={"#797E82"}
        >
          <Icon as={BiSupport} />
          <Text fontSize={"14px"} fontWeight={"medium"}>
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Sidenav;
