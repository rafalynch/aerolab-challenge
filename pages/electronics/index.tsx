import React, { useState, useEffect } from "react";
import { getProducts, getUser } from "../../services/api";
import { Stack, Text, Divider } from "@chakra-ui/react";
const orderBy = require("lodash.orderby");
import { useSelector, useDispatch } from "react-redux";

import { Product, User } from "../../types";
import { setUserData } from "../../features/userSlice";
import Header from "../../components/Header";
import { selectOrder } from "../../features/orderSlice";
import { selectPageIndex } from "../../features/pageIndexSlice";
import PageNav from "../../components/PageNav";
import SortingButtons from "../../components/SortingButtons";
import ProductsList from "../../components/ProductsList";

const MAX_ITEMS = 16;

interface ElectronicsProps {
  allProducts: Product[];
  user: User;
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

  dispatch(setUserData(props.user));

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
  }, [order, pageIndex]);

  return (
    <>
      <Header />
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
        <Divider orientation="vertical" />
        <SortingButtons />
        <Divider orientation="vertical" />
        <PageNav hasPrevPage={hasPrevPage} hasNextPage={hasNextPage} />
      </Stack>
      <Divider margin={10} />
      <ProductsList products={products} />
      <Divider margin={10} />
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
        <Divider orientation="vertical" />
        <PageNav hasPrevPage={hasPrevPage} hasNextPage={hasNextPage} />
      </Stack>
    </>
  );
}

export async function getServerSideProps() {
  const allProducts = await getProducts();
  const user = await getUser();

  return {
    props: { allProducts, user },
  };
}

export default Electronics;
