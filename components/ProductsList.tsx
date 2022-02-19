import React from "react";
import { Product } from "../types";
import { Box } from "@chakra-ui/react";
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
    <Box display="flex" gap={6} flexWrap="wrap" justifyContent="center">
      {products.map((product: Product) => {
        const isAffordable = product.cost <= userPoints;
        const pointsMissing = product.cost - userPoints;
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
            <Box>
              <ProductCard
                pointsMissing={pointsMissing}
                product={product}
                isAffordable={isAffordable}
              />
            </Box>
          </motion.div>
        );
      })}
    </Box>
  );
}
