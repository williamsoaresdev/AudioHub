import React from "react";
import { IAlthorCard } from "./IAuthorCard";
import { Text, Image, Box, Stack } from "native-base";

function AuthorCard(item: IAlthorCard) {
  return (
    <Box alignItems="center" margin={1.5}>
      <Box
        w="24"
        overflow="hidden"
        borderRadius="full"
        borderColor="muted.900"
        _dark={{
          borderColor: "muted.900",
          backgroundColor: "muted.600",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "muted.700",
        }}
      >
        <Box w="24" borderRadius="full">
          <Image
            size={24}
            borderRadius={100}
            source={{
              uri: item.img,
            }}
            alt="image"
          />
        </Box>
      </Box>
      <Stack p="4" space={3}>
        <Text fontWeight="400" color="muted.100">
          {item.name}
        </Text>
      </Stack>
    </Box>
  );
}

export default AuthorCard;
