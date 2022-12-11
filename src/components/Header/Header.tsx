import {
  ChakraProvider,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

export const Header = () => {
  return (
    <ChakraProvider>
      <Box backgroundColor={"#121212"}>
        <Heading textAlign={"center"} fontFamily={"sans-serif"}>
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            Dio Bank
          </Text>
        </Heading>
      </Box>
    </ChakraProvider>
  );
};
