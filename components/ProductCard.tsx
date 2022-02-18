import React from "react";
import Image from "next/image";
import { Box, Text, Flex, Badge, Stack, Divider, Grid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { postRedeem } from "../services/api";
import { Product } from "../types";
import { selectPoints, subtractPoints } from "../features/userSlice";

interface ProductCardProps {
  product: Product;
  isAffordable: boolean;
}

function ProductCard({ product, isAffordable }: ProductCardProps) {
  const dispatch = useDispatch();
  const points = useSelector(selectPoints);

  const MySwal = withReactContent(Swal);

  async function redeem() {
    if (!isAffordable) {
      return;
    }
    const confirmation = await MySwal.fire({
      showCancelButton: true,
      title: product.name,
      html: (
        <Box display="grid" justifyContent="center">
          <Text fontSize="24px">Buy for {product.cost} points?</Text>
          <Grid w={200} justifySelf="center" gap={4}>
            <Text margin={0}>{points}</Text>
            <Text margin={0}>- {product.cost}</Text>
            <Text margin={0} fontWeight="bold" borderTop="solid 2px">
              {points - product.cost}
            </Text>
          </Grid>
        </Box>
      ),
      icon: "question",
      confirmButtonColor: "green",
      cancelButtonColor: "red",
      confirmButtonText: (
        <Text margin={0} fontFamily="Raleway">
          Buy!
        </Text>
      ),
      cancelButtonText: (
        <Text margin={0} fontFamily="Raleway">
          Cancel
        </Text>
      ),
    });

    if (!confirmation.value) {
      return;
    }

    const redeemRes = await postRedeem(product._id);
    if (redeemRes.status === 200) {
      dispatch(subtractPoints(product.cost));
    }
  }

  return (
    <Box height="350px" width="300px" position={"relative"} role="group">
      <Box
        display={"block"}
        position="absolute"
        bg={isAffordable ? "aerolab.primary" : "lightgray"}
        height="100%"
        width="100%"
        bottom={0}
        opacity={0}
        transition={"0.1s"}
        zIndex={2}
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
        transition={"0.1s"}
        position={"absolute"}
        display={"grid"}
        textAlign={"center"}
        height="100%"
        width="100%"
        opacity={0}
        justifyContent={"center"}
        alignContent="center"
        color="white"
        _groupHover={{
          opacity: 1,
        }}
      >
        <Stack alignItems="center" direction="row" justifyContent="center">
          <Flex gap={2} alignContent="center" alignItems={"end"} padding={2}>
            <Text fontSize={"4xl"} margin={0} p={0}>
              {product.cost}
            </Text>
            <Image width="45px" height="45px" src={"/icons/coin.svg"}></Image>
          </Flex>
        </Stack>
        <Badge
          cursor={isAffordable ? "pointer" : "not-allowed"}
          onClick={redeem}
          borderRadius="full"
          px="25px"
          py="5px"
          bg={"white"}
        >
          {isAffordable ? "Reedem now" : "Not enough points"}
        </Badge>
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