import {
  Center,
  Button,
} from "@chakra-ui/react";



interface props {
 click : () => void;
}

export const AcceptButton = ({click}: props) => {
  return (
    <Center>
      <Button
        onClick={click}
        backgroundColor={"#E4105D"}
        color={"#FFFFFF"}
        size="sm"
        width="40%"
        marginTop="5px"
        borderRadius="50px"
      >
        Entrar
      </Button>
    </Center>
  );
};
