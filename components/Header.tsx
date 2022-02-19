import React from "react";
import Image from "next/image";
import { Stack, Badge, Text, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import aerolabLogo from "../public/images/aerolab-logo.svg";
import coin from "../public/icons/coin.svg";
import headerImg from "../public/images/header-x1.png";
import { selectUserData } from "../features/userSlice";
import { postPoints } from "../services/api";
import { addPoints } from "../features/userSlice";

export default function Header() {
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();

  async function handleClick() {
    const res = await postPoints(1000);

    if (res.status === 200) {
      dispatch(addPoints(1000));
    }
  }

  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between" padding={6}>
        <Image src={aerolabLogo} height={40} width={40} alt="aerolab-logo" />
        <Stack direction="row" spacing={2}>
          <Text paddingX={3} fontSize={15}>
            {user.name}
          </Text>
          <Badge
            rounded={"full"}
            display="flex"
            alignItems={"center"}
            paddingX={5}
            onClick={handleClick}
          >
            <Text paddingX={1} paddingY={0.1} fontSize={15}>
              {user.points}
            </Text>
            <Image width={20} height={20} src={coin} alt="coin-icon"></Image>
          </Badge>
        </Stack>
      </Stack>
      <Box position="relative">
        <Image src={headerImg} alt="electronics-header"></Image>
        <Text
          position="absolute"
          bottom="10%"
          left="10%"
          fontSize={{ sm: 30, md: 40, lg: 60 }}
          color="white"
        >
          Electronics
        </Text>
      </Box>
    </Stack>
  );
}
