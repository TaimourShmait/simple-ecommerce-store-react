import type { Product, CartItem } from "../../types.ts";
import ProductCard from "../components/ProductCard.tsx";
import SearchBar from "../components/SearchBar.tsx";
import CategoryFilter from "../components/CategoryFilter.tsx";

interface Props {
  products: Product[];
  onAddCartItem: (cartItem: CartItem) => void;
  search: string;
  onSearch: (search: string) => void;
  category: string;
  onCategory: (category: string) => void;
}
const Products = ({
  products,
  onAddCartItem,
  search,
  onSearch,
  category,
  onCategory,
}: Props) => {
  const productCards = products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        product={product}
        onAddCartItem={onAddCartItem}
      />
    );
  });

  return (
    <div id="products" className="w-100 d-flex flex-column gap-3">
      <div className="w-100 d-flex flex-column align-items-start gap-3">
        <SearchBar value={search} onChange={onSearch} />
        <CategoryFilter value={category} onChange={onCategory} />
      </div>

      <div
        id="products-list"
        className="w-100 flex-grow-1 d-flex flex-wrap gap-2"
      >
        {productCards}
      </div>
    </div>
  );
};

export default Products;
