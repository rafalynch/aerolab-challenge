import React from "react";
import { Box, Image, Text, Tag } from "@chakra-ui/react";

import { Product } from "../types";

function ProductCard(product: Product) {
  return (
    <Box
      maxHeight={"350px"}
      maxWidth="300px"
      position={"relative"}
      role="group"
      cursor={"pointer"}
    >
      <Box
        display={"block"}
        position="absolute"
        bg="aerolab.primary"
        height="100%"
        width={"100%"}
        bottom={0}
        opacity={0}
        transition={"0.1s"}
        _groupHover={{
          opacity: 0.6,
          height: "100%",
          width: "100%",
          boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        }}
        color="white"
      />
      <Box
        position={"absolute"}
        display={"grid"}
        textAlign={"center"}
        height="100%"
        width="100%"
        justifyContent={"center"}
        alignContent="center"
        color="white"
        opacity={0}
        transition={"0.2s"}
        _groupHover={{
          opacity: 1,
        }}
      >
        <Text fontSize={"4xl"} margin={0} p={0}>
          {product.cost}
        </Text>
        <Tag borderRadius="full" px="25px" py="5px" bg={"white"}>
          Reedem now
        </Tag>
      </Box>

      <Box
        padding={"25px"}
        w="100%"
        backgroundColor={"white"}
        boxShadow={"rgb(38, 57, 77) 0px 3px 20px -5px"}
      >
        <Image src={product.img.url} backgroundColor="rgb(0,0,0,0)" w="100%" />
        <Box>
          <Box>{product.category}</Box>
          <Box
            my="3px"
            mx="0"
            fontWeight="semibold"
            as="h3"
            lineHeight="tight"
            isTruncated
          >
            {product.name}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductCard;