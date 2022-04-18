import {
  Flex,
  Text,
  Grid,
  GridItem,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

// import { Container } from './styles';

const SectionListAuction: React.FC = () => {
  const [counter, setCounter] = React.useState(15);
  const [colorBox, setColorBox] = useState("#E4C627");
  const [close, setClose] = useState(false);
  const [openAuction, setOpenAuction] = useState(false);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 1 || counter === 2 || counter === 3) {
      setColorBox("red");
    }
  }, [counter]);

  return (
    <Flex width="100%" height="100vh" bgColor="black" flexDir="column">
      <Flex maxWidth="1200px" margin="2.5rem auto">
        <Text
          fontSize="32px"
          width="600px"
          textAlign="center"
          fontFamily="Raleway"
          color="white"
        >
          Leilões acontecendo agora
        </Text>
      </Flex>

      <Grid
        maxWidth="1200px"
        height="100%"
        margin="0 auto"
        display="flex"
        templateColumns="repeat(1fr, 3)"
        gap={20}
      >
        <GridItem
          borderRadius="15px"
          width="280px"
          height="340px"
          bgColor="rgba(212, 212, 212, 0.145)"
          padding="0 2rem"
        >
          <Flex width="100%" height="100%" flexDir="column" alignItems="center">
            <Text margin="1rem 0" color="white">
              Início 00/00/00 - às 00:00
            </Text>
            <Box
              padding="2rem 0"
              width="200px"
              height="210px"
              bgColor="rgba(255, 255, 255, 0.581)"
              display="flex"
              alignItems="center"
              borderRadius="10px"
              flexDir="column"
              mb="1rem"
            >
              <Heading fontSize="24px" fontFamily="Raleway" fontWeight="bold">
                Produto
              </Heading>

              <Flex
                width="120px"
                height="120px"
                justify="space-around"
                alignItems="center"
              >
                {openAuction ? (
                  <Box
                    width="50px"
                    height="50px"
                    bgColor={colorBox}
                    borderRadius="15px"
                    fontFamily="Raleway"
                    fontWeight="bold"
                    fontSize="22px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <span>{String(counter).padStart(2, "0")} </span>
                  </Box>
                ) : (
                  <>
                    <Box
                      width="50px"
                      height="50px"
                      bgColor="black"
                      borderRadius="15px"
                      fontFamily="Raleway"
                      fontWeight="bold"
                      fontSize="22px"
                      color="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <span>00</span>
                    </Box>
                  </>
                )}
              </Flex>
              <span> Nome do Usuário </span>
              <span> R$: 00,00 </span>
            </Box>
            <Button bgColor="#E4C627" width="100%" height="30px">
              Participar!
            </Button>
          </Flex>
        </GridItem>
        <GridItem
          borderRadius="15px"
          width="280px"
          height="340px"
          bgColor="rgba(212, 212, 212, 0.145)"
          padding="0 2rem"
        >
          <Flex width="100%" height="100%" flexDir="column" alignItems="center">
            <Text margin="1rem 0" color="white">
              Início 00/00/00 - às 00:00
            </Text>
            <Box
              padding="2rem 0"
              width="200px"
              height="210px"
              bgColor="rgba(255, 255, 255, 0.581)"
              display="flex"
              alignItems="center"
              borderRadius="10px"
              flexDir="column"
              mb="1rem"
            >
              <Heading fontSize="24px" fontFamily="Raleway" fontWeight="bold">
                Produto
              </Heading>

              <Flex
                width="120px"
                height="120px"
                justify="space-around"
                alignItems="center"
              >
                {openAuction ? (
                  <Box
                    width="50px"
                    height="50px"
                    bgColor={colorBox}
                    borderRadius="15px"
                    fontFamily="Raleway"
                    fontWeight="bold"
                    fontSize="22px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <span>{String(counter).padStart(2, "0")} </span>
                  </Box>
                ) : (
                  <>
                    <Box
                      width="50px"
                      height="50px"
                      bgColor="black"
                      borderRadius="15px"
                      fontFamily="Raleway"
                      fontWeight="bold"
                      fontSize="22px"
                      color="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <span>00</span>
                    </Box>
                  </>
                )}
              </Flex>
              <span> Nome do Usuário </span>
              <span> R$: 00,00 </span>
            </Box>
            <Button bgColor="#E4C627" width="100%" height="30px">
              Participar!
            </Button>
          </Flex>
        </GridItem>
        <GridItem
          borderRadius="15px"
          width="280px"
          height="340px"
          bgColor="rgba(212, 212, 212, 0.145)"
          padding="0 2rem"
        >
          <Flex width="100%" height="100%" flexDir="column" alignItems="center">
            <Text margin="1rem 0" color="white">
              Início 00/00/00 - às 00:00
            </Text>
            <Box
              padding="2rem 0"
              width="200px"
              height="210px"
              bgColor="rgba(255, 255, 255, 0.581)"
              display="flex"
              alignItems="center"
              borderRadius="10px"
              flexDir="column"
              mb="1rem"
            >
              <Heading fontSize="24px" fontFamily="Raleway" fontWeight="bold">
                Produto
              </Heading>

              <Flex
                width="120px"
                height="120px"
                justify="space-around"
                alignItems="center"
              >
                {openAuction ? (
                  <Box
                    width="50px"
                    height="50px"
                    bgColor={colorBox}
                    borderRadius="15px"
                    fontFamily="Raleway"
                    fontWeight="bold"
                    fontSize="22px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <span>{String(counter).padStart(2, "0")} </span>
                  </Box>
                ) : (
                  <>
                    <Box
                      width="50px"
                      height="50px"
                      bgColor="black"
                      borderRadius="15px"
                      fontFamily="Raleway"
                      fontWeight="bold"
                      fontSize="22px"
                      color="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <span>00</span>
                    </Box>
                  </>
                )}
              </Flex>
              <span> Nome do Usuário </span>
              <span> R$: 00,00 </span>
            </Box>
            <Button bgColor="#E4C627" width="100%" height="30px">
              Participar!
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default SectionListAuction;
