import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Flex
      bgColor="black.900"
      width="100%"
      margin="0 auto"
      height="70px"
      alignItems="center"
      justify="space-between"
      flex="1"
    >
      <Flex
        maxWidth="1400px"
        height="100%"
        margin="0 auto"
        alignItems="center"
        justify="space-between"
        flex="1"
      >
        <Flex
          alignItems="center"
          width="50%"
          height="100%"
          justify="flex-start"
          paddingLeft="2rem"
        >
          {/* headerLeft */}
          <Text fontSize="2rem" color="white">
            LOGO
          </Text>
        </Flex>

        <Flex
          paddingRight="2rem"
          alignItems="center"
          width="50%"
          height="100%"
          justify="flex-end"
        >
          {/* headerRight */}
          <Button bgColor="blue.700" color="white">
            Entrar
          </Button>
          <Button bgColor="blue.700" color="white" ml="0.8rem">
            Cadastrar
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
