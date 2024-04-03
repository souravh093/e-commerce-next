import Container from "@/app/components/Container";
import React from "react";
import ProductDetails from "./ProductDetails";
import { product } from "@/utils/singleProduct";
import ListRating from "./ListRating";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
       <div>
       <div className="flex flex-col mt-20 gap-4">Add Rating</div>
       <ListRating product={product} />
       </div>

      </Container>
    </div>
  );
};

export default Product;
