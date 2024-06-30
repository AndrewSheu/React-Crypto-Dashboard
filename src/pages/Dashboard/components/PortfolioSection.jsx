import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const PortfolioSection = () => {
  return (
    <HStack bg={"white"} borderRadius={"xl"} p={"6"}>
      <Stack>
        <HStack color={"black.80"}>
          <Text fontSize={"14px"} color={""}>
            Total Protfolio Value
          </Text>
          <Icon as={IoIosInformationCircleOutline} />
        </HStack>
        <Text fontSize={"24px"}>$ 112,212.72</Text>
      </Stack>
    </HStack>
  );
};

export default PortfolioSection;
