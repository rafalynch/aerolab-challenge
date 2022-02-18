import React from "react";
import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function NextPage(props: IconButtonProps) {
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
      icon={<ChevronRightIcon />}
      _focus={{}}
      _active={{ bg: "aerolab.primary" }}
    />
  );
}
