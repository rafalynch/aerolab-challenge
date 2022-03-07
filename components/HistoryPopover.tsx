import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Text,
  Button,
  Flex,
  Divider,
  Grid,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";

import { Product } from "../types";
import histoyIcon from "../public/icons/history.png";
import coinIcon from "../public/icons/coin.svg";

interface HistoryPopoverProps {
  history: Product[];
}

export default function HistoryPopover({ history }: HistoryPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          rounded="full"
          display={"flex"}
          cursor="pointer"
          height={"50px"}
          width={"50px"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={"10px"}
        >
          <Image alt={"history"} src={histoyIcon}></Image>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        maxHeight={"80vh"}
        marginRight={10}
        overflow={"auto"}
        margin={2}
      >
        <PopoverArrow />
        <PopoverCloseButton cursor={"pointer"} />
        <PopoverHeader fontWeight={"bold"}>Redeem history</PopoverHeader>
        <PopoverBody>
          {history
            .map((product, index) => {
              return (
                <Box margin={5} key={product._id + index}>
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Image
                      width={"60px"}
                      height={"60px"}
                      src={product.img.url}
                      objectFit={"cover"}
                      alt={product.name}
                    ></Image>
                    <Grid textAlign={"right"}>
                      <Text margin={0}>{product.name}</Text>
                      <Flex justifyContent={"end"}>
                        <Text fontWeight={"bold"} margin={0}>
                          {product.cost}
                        </Text>
                        <Image
                          width={"10px"}
                          height={"10px"}
                          src={coinIcon}
                        ></Image>
                      </Flex>
                    </Grid>
                  </Flex>
                  <Divider></Divider>
                </Box>
              );
            })
            .reverse()}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
