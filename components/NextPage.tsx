import React from "react";
import { IconButton } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface NextPageProps {
  isDisabled: boolean;
}

export default function NextPage(props: NextPageProps) {
  return (
    <IconButton
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
