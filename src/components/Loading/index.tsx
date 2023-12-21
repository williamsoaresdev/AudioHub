import { HStack, Spinner } from "native-base";

const Loading = () => {
  return (
    <HStack
      position="absolute"
      width="full"
      height="full"
      space={8}
      justifyContent="center"
      alignItems="center"
      backgroundColor="muted.100"
      opacity={20}
      zIndex={100}
    >
      <Spinner color="black" size="xl" />
    </HStack>
  );
};
export default Loading;
