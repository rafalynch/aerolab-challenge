import React from "react";
import Image from "next/image";
import { Box, Text, Flex, Badge, Stack, Grid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { getHistory, postRedeem } from "../services/api";
import { Product } from "../types";
import {
  selectPoints,
  setHistory,
  subtractPoints,
} from "../features/userSlice";
import buyWhiteIcon from "../public/icons/buy-white.svg";
import buyBlueIcon from "../public/icons/buy-blue.svg";
import coinIcon from "../public/icons/coin.svg";

interface ProductCardProps {
  product: Product;
  isAffordable: boolean;
  pointsMissing: number;
}

function ProductCard({
  product,
  isAffordable,
  pointsMissing,
}: ProductCardProps) {
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

      getHistory().then((history) => {
        dispatch(setHistory(history));
      });
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
        position="absolute"
        top={4}
        right={4}
        opacity={0}
        zIndex={3}
        _groupHover={{ opacity: 1 }}
      >
        {isAffordable ? (
          <Image src={buyWhiteIcon} width={50} height={50} alt="buy-icon" />
        ) : (
          <Badge
            textTransform="none"
            rounded="full"
            gap={1}
            display="flex"
            alignItems="center"
            paddingX={3}
            paddingY="0"
            backgroundColor="white"
          >
            <Text marginY={1}>You need {pointsMissing}</Text>
            <Image
              width="15px"
              height="15px"
              src={coinIcon}
              alt="coin-icon"
            ></Image>
          </Badge>
        )}
      </Box>

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
          <Flex gap={1} alignContent="center" alignItems={"center"} padding={2}>
            <Text fontSize={"4xl"} margin={0} p={0}>
              {product.cost}
            </Text>
            <Image
              width="30px"
              height="30px"
              src={coinIcon}
              alt="coin-icon"
            ></Image>
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
          position="absolute"
          top={4}
          right={4}
          zIndex={3}
          transition="0.1s"
          _groupHover={{ opacity: 0 }}
        >
          {isAffordable && (
            <Image src={buyBlueIcon} width={50} height={50} alt="buy-icon" />
          )}
        </Box>
        <Box
          width={"100%"}
          height={"230px"}
          position={"relative"}
          backgroundColor={"white"}
        >
          <Image
            src={product.img.url}
            layout={"fill"}
            objectFit={"contain"}
            alt={product.name}
          />
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
