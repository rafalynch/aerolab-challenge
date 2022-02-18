import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

export default function SortButton(props: ButtonProps) {
  return (
    <a>
      <Button
        color={"gray"}
        backgroundColor="lightgray"
        onClick={props.onClick}
        border={0}
        rounded={"full"}
        boxShadow={"0"}
        fontWeight="200"
        fontSize={"16px"}
        px="20px"
        m="5px"
        fontFamily={"inherit"}
        isActive={props.isActive}
        _active={{ bg: "aerolab.primary", color: "white" }}
        _focus={{}}
        cursor="pointer"
      >
        {props.children}
      </Button>
    </a>
  );
}
