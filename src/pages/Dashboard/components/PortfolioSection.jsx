import { HStack, Icon, Stack, Text, Tag, Button } from "@chakra-ui/react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

const PortfolioSection = () => {
  return (
    <HStack
      justify={"space-between"}
      bg={"white"}
      borderRadius={"xl"}
      p={"6"}
      align={{ base: "flex-start", xl: "center" }}
      flexDir={{ base: "column", xl: "row" }}
      spacing={{ base: 4, xl: 0 }}
    >
      <HStack
        spacing={{ base: 0, xl: 16 }}
        align={{ base: "flex-start", xl: "center" }}
        flexDir={{ base: "column", xl: "row" }}
      >
        <Stack>
          <HStack color={"black.80"}>
            <Text fontSize={"sm"} color={""}>
              Total Protfolio Value
            </Text>
            <Icon as={IoIosInformationCircleOutline} />
          </HStack>
          <Text textStyle={"h2"} fontWeight={"medium"}>
            $ 112,212.72
          </Text>
        </Stack>
        <Stack>
          <HStack color={"black.80"}>
            <Text fontSize={"sm"} color={""}>
              Wallet Balances
            </Text>
          </HStack>
          <HStack
            spacing={2}
            align={{ base: "flex-start", xl: "center" }}
            flexDir={{ base: "column", xl: "row" }}
          >
            <HStack>
              <Text textStyle={"h2"} fontWeight={"medium"}>
                22.397483922
              </Text>{" "}
              <Tag colorScheme="gray" fontWeight={"medium"}>
                BTC
              </Tag>
            </HStack>
            <HStack>
              <Text textStyle={"h2"} fontWeight={"medium"}>
                1,300,00
              </Text>{" "}
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={FaArrowDownLong} />}>Deposit</Button>
        <Button leftIcon={<Icon as={FaArrowUpLong} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
