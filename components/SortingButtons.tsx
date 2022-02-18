import React from "react";
import { Stack, Box } from "@chakra-ui/react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { setDesc, setAsc, setDefault } from "../features/orderSlice";
import { initPage } from "../features/pageIndexSlice";
import { selectOrder } from "../features/orderSlice";
import SortButton from "./SortButton";

export default function SortingButtons() {
  const router = useRouter();
  const order = useSelector(selectOrder);
  const dispatch = useDispatch();

  async function handleClick(order: "desc" | "asc" | "default") {
    dispatch(initPage());
    switch (order) {
      case "desc": {
        dispatch(setDesc());
        break;
      }
      case "asc": {
        dispatch(setAsc());
        break;
      }
      case "default": {
        dispatch(setDefault());
        break;
      }
    }
  }

  return (
    <Stack direction="row" spacing={2}>
      <Box>
        <SortButton
          isActive={order === "default"}
          onClick={() => handleClick("default")}
        >
          Most recent
        </SortButton>
        <SortButton
          isActive={order === "asc"}
          onClick={() => handleClick("asc")}
        >
          Lowest price
        </SortButton>
        <SortButton
          isActive={order === "desc"}
          onClick={() => handleClick("desc")}
        >
          Highest price
        </SortButton>
      </Box>
    </Stack>
  );
}
