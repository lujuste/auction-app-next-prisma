import { Flex, Text, Button } from "@chakra-ui/react";
import React from "react";

// import { Container } from './styles';

const SectionHero: React.FC = () => {
  return (
    <Flex
      bgColor="gray.900"
      width="100%"
      height="calc(100vh - 70px)"
      justify="center"
      alignItems="center"
    >
      <Flex flexDir="column">
        <Text
          width="500px"
          height="280px"
          fontSize="68px"
          fontFamily="Raleway"
          fontWeight={500}
          color="white"
          textAlign="center"
        >
          Leilão de produtos novos
        </Text>
        <Button
          width="200px"
          height="55px"
          fontSize="20px"
          color="white"
          bgColor="blue.700"
          margin="0 auto"
        >
          Comprar lances
        </Button>
      </Flex>
    </Flex>
  );
};
export default SectionHero;
