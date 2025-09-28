import type { Product, CartItem } from "../../types.ts";

interface Props {
  product: Product;
  onAddCartItem: (cartItem: CartItem) => void;
}

const ProductCard = ({ product, onAddCartItem }: Props) => {
  return (
    <div className="product-card d-flex flex-column gap-3 p-3 border rounded shadow-sm bg-white">
      <img src="/image.png" alt={product.name} className="product-image" />

      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">{product.name}</h5>
        <span
          className={`badge p-1 ${
            product.category === "silence" ? "bg-secondary" : "bg-warning"
          }`}
        >
          {product.category}
        </span>
      </div>

      <p className="text-muted small mb-2">{product.description}</p>

      <div className="d-flex justify-content-between align-items-center mt-auto">
        <h6 className="mb-0 fw-bold">${product.price}</h6>
        <button
          className="add-to-cart-btn btn btn-outline-success btn-sm p-1"
          onClick={() => onAddCartItem({ product, quantity: 1 })}
        >
          <i className="bi bi-bag-plus me-1"></i>Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
