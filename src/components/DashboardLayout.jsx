import { Box, Container, Flex } from "@chakra-ui/react";
import TopNav from "./TopNav";
import Sidenav from "./Sidenav";

const DashboardLayout = ({ title, children }) => {
  return (
    <Flex>
      <Sidenav />
      <Box flexGrow={"1"}>
        <TopNav title={title} />
        <Container maxW={"80rem"}>{children}</Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
