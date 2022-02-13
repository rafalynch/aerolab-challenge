import React from "react";
import {} from "@chakra-ui/react";

import { GetServerSideProps, NextPage } from "next";

export default function ProductCard<NextPage>(props: GetServerSideProps) {
  console.log(props);
  return <div>Hola</div>;
}
