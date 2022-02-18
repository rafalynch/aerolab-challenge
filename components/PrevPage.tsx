import React from "react";
import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export default function PrevPage(props: IconButtonProps) {
  return (
    <IconButton
      onClick={props.onClick}
      color={"gray"}
      bg="lightgray"
      isDisabled={props.isDisabled}
      cursor="pointer"
      borderRadius={"100%"}
      border={0}
      aria-label="Next page"
      icon={<ChevronLeftIcon />}
      _focus={{}}
      _active={{ bg: "aerolab.primary" }}
    />
  );
}
