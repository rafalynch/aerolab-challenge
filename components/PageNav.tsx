import React from "react";
import { useRouter } from "next/router";
import { Stack } from "@chakra-ui/react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import PrevPage from "./PrevPage";
import NextPage from "./NextPage";
import { selectPageIndex } from "../features/pageIndexSlice";
import { nextPage, prevPage } from "../features/pageIndexSlice";

interface PageNavProps {
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

export default function PageNav(props: PageNavProps) {
  const router = useRouter();
  const pageIndex = useSelector(selectPageIndex);
  const dispatch = useDispatch();

  function handleNextPage() {
    dispatch(nextPage());
  }

  function handlePrevPage() {
    dispatch(prevPage());
  }

  return (
    <Stack direction="row" spacing={4}>
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
