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
        width="100%"
        marginTop="5px"
      >
        Button
      </Button>
    </Center>
  );
};
