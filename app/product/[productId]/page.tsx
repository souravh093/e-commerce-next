import Container from "@/app/components/Container";
import React from "react";
import ProductDetails from "./ProductDetails";
import { product } from "@/utils/singleProduct";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
