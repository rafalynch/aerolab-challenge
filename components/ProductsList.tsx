import React from "react";
import { Product } from "../types";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

import ProductCard from "./ProductCard";

interface ProductsListProps {
  products: Product[];
}

export default function ProductsList(props: ProductsListProps) {
  const { products } = props;

  return (
    <Wrap spacing="30px" justify="center">
      {products.map((product: Product) => {
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
              <ProductCard
                key={product._id}
                _id={product._id}
                name={product.name}
                category={product.category}
                cost={product.cost}
                img={product.img}
              />
            </WrapItem>
          </motion.div>
        );
      })}
    </Wrap>
  );
}
