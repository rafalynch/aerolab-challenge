import React, { useState, useEffect } from "react";
import { getHistory, getProducts } from "../../services/api";
import { Stack, Text, Divider, Box } from "@chakra-ui/react";
const orderBy = require("lodash.orderby");
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";

import { Product } from "../../types";
import { setHistory } from "../../features/userSlice";
import Header from "../../components/Header";
import { selectOrder } from "../../features/orderSlice";
import { selectPageIndex } from "../../features/pageIndexSlice";
import PageNav from "../../components/PageNav";
import SortingButtons from "../../components/SortingButtons";
import ProductsList from "../../components/ProductsList";

const MAX_ITEMS = 16;

interface ElectronicsProps {
  allProducts: Product[];
  history: Product[];
}

function Electronics(props: ElectronicsProps) {
  const dispatch = useDispatch();

  const [products, setProducts] = useState<Product[]>([]);

  const pageIndex = useSelector(selectPageIndex);
  const firstItemIndex = MAX_ITEMS * (pageIndex - 1);

  const order = useSelector(selectOrder);

  const hasPrevPage = pageIndex > 1;
  const hasNextPage = !(
    firstItemIndex + products.length ===
    props.allProducts.length
  );

  dispatch(setHistory(props.history));

  useEffect(() => {
    var productsSorted: Product[];

    switch (order) {
      case "asc": {
        productsSorted = orderBy(props.allProducts, ["cost"], ["asc"]);
        break;
      }
      case "desc": {
        productsSorted = orderBy(props.allProducts, ["cost"], ["desc"]);
        break;
      }
      default: {
        var productsSorted = props.allProducts;
        break;
      }
    }
    const slicedProducts = productsSorted.slice(
      firstItemIndex,
      firstItemIndex + MAX_ITEMS
    );
    setProducts(slicedProducts);
  }, [order, pageIndex, firstItemIndex, props.allProducts]);

  return (
    <Box>
      <Head>
        <title>Aerolab | Electronics</title>
      </Head>
      <Header />
      <Box
        display={{ sm: "flex", lg: "grid" }}
        gridTemplateColumns={{ lg: "2fr 3fr 2fr" }}
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
        alignContent="center"
        padding={4}
        gap={4}
      >
        <Text textAlign="center">
          {`${firstItemIndex + products.length} products of 
        ${props.allProducts.length}`}
        </Text>
        <SortingButtons />
        <PageNav hasPrevPage={hasPrevPage} hasNextPage={hasNextPage} />
      </Box>
      <Divider marginY={4} width="80%" />
      <ProductsList products={products} />
      <Divider marginY={4} width="80%" />
      <Stack
        direction={"row"}
        justifyContent="center"
        alignItems={"center"}
        margin={6}
        height={10}
        spacing={6}
      >
        <Text>
          {`${firstItemIndex + products.length} products of 
        ${props.allProducts.length}`}
        </Text>
        <PageNav hasPrevPage={hasPrevPage} hasNextPage={hasNextPage} />
      </Stack>
    </Box>
  );
}

export async function getServerSideProps() {
  const allProducts = await getProducts();
  const history = await getHistory();

  return {
    props: { allProducts, history },
  };
}

export default Electronics;
