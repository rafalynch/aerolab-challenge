import React from "react";
import Image from "next/image";
import { Box, Text, Tag, Image as ImageCh, Stack } from "@chakra-ui/react";

import { Product } from "../types";

function ProductCard(product: Product) {
  return (
    <Box
      height="350px"
      width="300px"
      position={"relative"}
      role="group"
      cursor={"pointer"}
    >
      <Box
        display={"block"}
        position="absolute"
        bg="aerolab.primary"
        height="100%"
        width="100%"
        bottom={0}
        opacity={0}
        transition={"0.1s"}
        zIndex={3}
        _groupHover={{
          opacity: 0.6,
          height: "100%",
          width: "100%",
          boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        }}
        color="white"
      />

      <Box
        zIndex={3}
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
        <Stack alignItems="center" direction="row" justifyContent="center">
          <Text fontSize={"4xl"} margin={0} p={0}>
            {product.cost}
          </Text>
          <ImageCh width="40px" height="40px" src={"/icons/coin.svg"}></ImageCh>
        </Stack>
        <Tag borderRadius="full" px="25px" py="5px" bg={"white"}>
          Reedem now
        </Tag>
      </Box>

      <Box
        padding={"25px"}
        w="100%"
        h="100%"
        backgroundColor={"white"}
        boxShadow={"rgb(38, 57, 77) 0px 3px 20px -5px"}
      >
        <Box
          width={"100%"}
          height={"230px"}
          position={"relative"}
          padding={"25px"}
          backgroundColor={"white"}
        >
          <Image src={product.img.url} layout={"fill"} objectFit={"contain"} />
        </Box>

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