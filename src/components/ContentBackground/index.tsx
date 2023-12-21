import { Box } from "native-base";
import React from "react";
import { IContentBackground } from "./IContentBackground";

function ContentBackground({ children }: IContentBackground) {
  return (
    <>
      <Box backgroundColor={"muted.800"}>
        <Box width={"100%"} height={"100%"} bg={["muted.800"]} padding={1.5}>
          {children}
        </Box>
      </Box>
    </>
  );
}

export default ContentBackground;
