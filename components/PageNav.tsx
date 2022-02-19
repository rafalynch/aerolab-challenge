import React from "react";
import { Stack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import PrevPage from "./PrevPage";
import NextPage from "./NextPage";
import { nextPage, prevPage } from "../features/pageIndexSlice";

interface PageNavProps {
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

export default function PageNav(props: PageNavProps) {
  const dispatch = useDispatch();

  function handleNextPage() {
    dispatch(nextPage());
  }

  function handlePrevPage() {
    dispatch(prevPage());
  }

  return (
    <Stack
      direction="row"
      justifyContent="center"
      margin="10px"
      flexWrap="wrap"
      spacing={0}
      gap={2}
    >
      {props.hasPrevPage ? (
        <PrevPage
          aria-label="Next page"
          onClick={handlePrevPage}
          isDisabled={false}
        />
      ) : (
        <PrevPage
          onClick={handlePrevPage}
          aria-label="Next page"
          isDisabled={true}
        />
      )}

      {props.hasNextPage ? (
        <NextPage
          aria-label="Next page"
          onClick={handleNextPage}
          isDisabled={false}
        />
      ) : (
        <NextPage
          aria-label="Next page"
          onClick={handleNextPage}
          isDisabled={true}
        />
      )}
    </Stack>
  );
}
