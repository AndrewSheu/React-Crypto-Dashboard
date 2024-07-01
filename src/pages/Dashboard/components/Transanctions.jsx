import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";
import { React } from "react-dom";

const Transanctions = () => {
  const transanctions = [
    {
      id: "1",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ $81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- $101,883.43",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ $81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];

  return (
    <CustomCard h={"full"}>
      <Text mb={"6"} fontSize={"sm"} color={"back.80"}>
        Recent Transactions
      </Text>
      <Stack spacing={"4"}>
        {transanctions.map((transanction, i) => (
          <>
            {i != 0 && <Divider />}
            <Flex gap={"4"}>
              <Grid
                placeItems={"center"}
                bg={"black.5"}
                boxSize={10} // 修正拼写错误
                borderRadius="full" // 修正拼写错误
              >
                <Icon as={transanction.icon} />
              </Grid>
              <Flex justify={"space-between"} w={"full"}>
                <Stack spacing={0}>
                  <Text fontSize={"h6"} color={"black.80"}>
                    {transanction.text}
                  </Text>
                  <Text fontSize={"sm"} color={"black.40"}>
                    {transanction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle={"h6"}>{transanction.amount}</Text>
              </Flex>
            </Flex>
          </>
        ))}
      </Stack>
      <Button w={"full"} mt={6} colorScheme={"gray"}>
        View All
      </Button>
    </CustomCard>
  );
};

export default Transanctions;
