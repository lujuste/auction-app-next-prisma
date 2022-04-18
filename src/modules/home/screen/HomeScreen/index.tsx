import React from "react";
import { Flex, Text, Button, Grid, GridItem } from "@chakra-ui/react";
import SectionHero from "../components/SectionHero";
import SectionListAuction from "../components/SectionListAuction";

// import { Container } from './styles';

const HomeScreen: React.FC = () => {
  return (
    <>
      <Flex width="100vw" height="100%" flexDir="column">
        <SectionHero />
        <SectionListAuction />
      </Flex>
    </>
  );
};

export default HomeScreen;
