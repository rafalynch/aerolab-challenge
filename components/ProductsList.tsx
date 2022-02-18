import React from "react";
import { Product } from "../types";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import ProductCard from "./ProductCard";
import { selectPoints } from "../features/userSlice";

interface ProductsListProps {
  products: Product[];
}

export default function ProductsList(props: ProductsListProps) {
  const { products } = props;
  const userPoints = useSelector(selectPoints);

  return (
    <Wrap spacing="30px" justify="center">
      {products.map((product: Product) => {
        const isAffordable = product.cost <= userPoints;
        return (
          <motion.div
            key={product._id}
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
            }}
          >
            <WrapItem key={product._id}>
              <ProductCard product={product} isAffordable={isAffordable} />
            </WrapItem>
          </motion.div>
        );
      })}
    </Wrap>
  );
}
