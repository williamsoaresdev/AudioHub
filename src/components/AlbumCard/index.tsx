import React from "react";
import { IAlbumCard } from "./IAlbumCard";
import { Text, Image, Heading, Box, AspectRatio, Stack } from "native-base";

function AlbumCard(item: IAlbumCard) {
  return (
    <Box alignItems="center" margin={1.5}>
      <Box
        maxW="40"
        rounded="lg"
        overflow="hidden"
        borderColor="muted.900"
        borderWidth="1"
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
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: item.img,
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1" color="muted.100" overflow={"hidden"}>
              {item.title}
            </Heading>
          </Stack>
          <Text fontWeight="400" color="muted.100">
            {item.name}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}

export default AlbumCard;
