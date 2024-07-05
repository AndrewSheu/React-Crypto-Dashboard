import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";

const InfoCard = ({ imgUrl, text, tagtext }) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize={"cover"} bgRepeat={"no-repeat"}>
      <Tag bg="p.purple" color={"white"} borderRadius={"full"}>
        {tagtext}
      </Tag>
      <Text mt={"4"} textStyle="h5">
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
