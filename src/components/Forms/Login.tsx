import {
  Center,
  ChakraProvider,
  Input,
  Box,
  Text,
} from "@chakra-ui/react";

import { AcceptButton } from "../Buttons/AcceptButton";
import { login } from "../../services/login";

export const LoginForm = () => {
  return (
    <ChakraProvider>
      <Box
        minHeight="100vh"
        backgroundColor="#1E192C"
        padding="25px"
        fontFamily={"sans-serif"}
      >
        <Center>
          <Box
            backgroundColor="#FAFAFA"
            borderRadius="25px"
            padding="15px"
            width={"60%"}
            marginTop={"40px"}
          >
            <Text textAlign={"center"} fontSize={"2xl"}>
              Faça o login
            </Text>

            <Input placeholder="email" />
            <Input placeholder="password" />
            <AcceptButton click={login} />

          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  );
};
