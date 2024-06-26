import { products } from "@/utils/product";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import { trunCateText } from "@/utils/truncateText";
import ProductCard from "./components/product/ProductCard";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {
            products.map((product: any) => {
              return <ProductCard data={product} key={product.id} />
            } )
          }
        </div>
      </Container>
    </div>
  )
}
