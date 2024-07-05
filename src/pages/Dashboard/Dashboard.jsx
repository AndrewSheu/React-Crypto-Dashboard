import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
import Transanctions from "./components/Transanctions";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
  return (
    <DashboardLayout title={"Dashboard"}>
      <Grid
        gridTemplateColumns={{ base: "repect(1, 1fr)", md: "repect(2, 1fr" }}
        gap={"6"}
      >
        <GridItem colSpan={2}>
          {" "}
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          {" "}
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          {" "}
          <Transanctions />
        </GridItem>
        <GridItem colSpan={1}>
          {" "}
          <InfoCard
            imgUrl={""}
            text={
              "Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
            }
            tagtext={"Loan"}
          />
        </GridItem>
        <GridItem colSpan={1}>
          {" "}
          <InfoCard
            imgUrl=""
            text={
              "Learn more about our real estate, and corporate account services"
            }
            tagtext={"Contact"}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
