import React from "react";
import Image from "next/image";
import { Stack, Badge, Text, Box } from "@chakra-ui/react";

import { User } from "../types";
import aerolabLogo from "../public/images/aerolab-logo.svg";
import coin from "../public/icons/coin.svg";
import headerImg from "../public/images/header-x1.png";

interface HeaderProps {
  user: User;
}

export default function Header({ user }: HeaderProps) {
  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between" padding={6}>
        <Image src={aerolabLogo} height={40} width={40} />
        <Stack direction="row" spacing={2}>
          <Text paddingX={3} fontSize={15}>
            {user.name}
          </Text>
          <Badge
            rounded={"full"}
            display="flex"
            alignItems={"center"}
            paddingX={5}
          >
            <Text paddingX={1} paddingY={0.1} fontSize={15}>
              {user.points}
            </Text>
            <Image width={20} height={20} src={coin}></Image>
          </Badge>
        </Stack>
      </Stack>
      <Box position="relative">
        <Image src={headerImg}></Image>
        <Text
          position="absolute"
          bottom={10}
          left={20}
          fontSize={40}
          color="white"
        >
          Electronics
        </Text>
      </Box>
    </Stack>
  );
}
