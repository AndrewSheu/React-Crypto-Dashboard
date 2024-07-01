import { CustomCard } from "../../../chakra/CustomCard";
import {
  HStack,
  Icon,
  Stack,
  Text,
  Flex,
  Button,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

const PriceSection = () => {
  const timestamps = ["7:15 PM", "8:15 PM", "9:15 PM", "10:15 PM", "11:15 PM"];

  return (
    <CustomCard>
      <Flex justify={"space-between"} align={"start"}>
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
              <HStack fontWeight={"medium"} color={"green"}>
                <Icon as={BsArrowUpRight} />
                <Text fontSize={"sm"} fontWeight={"medium"}>
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={FaCirclePlus} />}>Buy</Button>
          <Button leftIcon={<Icon as={FaCircleMinus} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg={"black.5"} p={"3px"} borderRadius={"6px"}>
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "white" }}
                key={tab}
                fontSize={"sm"}
                p={"6px"}
                borderRadius={"4"}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w={"100%"} src="/Graph.png" mt={"48px"} />
            <HStack justify={"space-between"}>
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize={"sm"} color={"black.80"}>
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
