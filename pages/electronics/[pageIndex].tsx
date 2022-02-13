import React from "react";
import { useRouter } from "next/router";
import { getProducts, getUser } from "../../services/api";

const MAX_ITEMS = 20;

function Electronics(props: any) {
  const router = useRouter();
  const { pageIndex } = router.query;
  const firstItemIndex = MAX_ITEMS * (Number.parseInt(pageIndex as string) - 1);

  const products = props.products.slice(
    firstItemIndex,
    firstItemIndex + MAX_ITEMS
  );

  return (
    <div>
      {products.map((product: any) => {
        return <div key={product._id}>{product.name}</div>;
      })}
    </div>
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
