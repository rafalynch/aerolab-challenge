import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { getProducts, getUser } from "../../services/api";
import { Box, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
const orderBy = require("lodash.orderby");
import { useSelector, useDispatch } from "react-redux";

import { setAsc, setDesc, setDefault } from "../../features/orderSlice";
import { selectOrder } from "../../features/orderSlice";
import { Product } from "../../types";
import ProductCard from "../../components/ProductCard";
import SortButton from "../../components/SortButton";

const MAX_ITEMS = 16;

function Electronics(props: any) {
  const router = useRouter();

  const order = useSelector(selectOrder);
  const dispatch = useDispatch();

  const { pageIndex } = router.query;
  const firstItemIndex = MAX_ITEMS * (Number.parseInt(pageIndex as string) - 1);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    var productsSorted;

    switch (order) {
      case "asc": {
        productsSorted = orderBy(props.products, ["cost"], ["asc"]);
        break;
      }
      case "desc": {
        productsSorted = orderBy(props.products, ["cost"], ["desc"]);
        break;
      }
      case "default": {
        var productsSorted = props.products;
        break;
      }
    }
    const slicedProducts = productsSorted.slice(
      firstItemIndex,
      firstItemIndex + MAX_ITEMS
    );
    setProducts(slicedProducts);
  }, [order, pageIndex]);

  function handleClick(order: "desc" | "asc" | "default") {
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
    <Box>
      <Stack direction={"row"} justifyContent="space-around">
        <Link
          href={"/electronics/" + (Number.parseInt(pageIndex as string) - 1)}
        >
          <button>Anterior pagina</button>
        </Link>

        <Box>
          <Link href={"/electronics/1"}>
            <SortButton
              isActive={order === "default"}
              onClick={() => handleClick("default")}
            >
              Most recent
            </SortButton>
          </Link>
          <Link href={"/electronics/1"}>
            <SortButton
              isActive={order === "asc"}
              onClick={() => handleClick("asc")}
            >
              Lowest price
            </SortButton>
          </Link>
          <Link href={"/electronics/1"}>
            <SortButton
              isActive={order === "desc"}
              onClick={() => handleClick("desc")}
            >
              Highest price
            </SortButton>
          </Link>
        </Box>
        <Link
          href={"/electronics/" + (Number.parseInt(pageIndex as string) + 1)}
        >
          <button>Siguiente pagina</button>
        </Link>
      </Stack>
      <Text textAlign={"center"}>
        {`${firstItemIndex + products.length} products of 
        ${props.products.length}`}
      </Text>
      <Wrap spacing="30px" justify="center">
        {products.map((product: Product) => {
          return (
            <WrapItem>
              <ProductCard
                key={product._id}
                _id={product._id}
                name={product.name}
                category={product.category}
                cost={product.cost}
                img={product.img}
              />
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();
  const user = await getUser();

  return {
    props: { products, user },
  };
}

export default Electronics;
