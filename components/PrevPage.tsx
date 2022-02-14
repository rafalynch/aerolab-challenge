import React from "react";
import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

interface PrevPageProps {
  isDisabled: boolean;
}

export default function PrevPage(props: PrevPageProps) {
  return (
    <IconButton
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
