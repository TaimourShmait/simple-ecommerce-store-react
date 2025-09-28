import type { CartItem } from "../../types.ts";
import CartItemCard from "../components/CartItemCard";

interface Props {
  cartItems: CartItem[];
  totalCartItems: number;
  onAddCartItem: (cartItem: CartItem) => void;
  onDecrementCartItem: (id: number) => void;
  onRemoveCartItem: (id: number) => void;
}

const Cart = ({
  cartItems,
  totalCartItems,
  onAddCartItem,
  onDecrementCartItem,
  onRemoveCartItem,
}: Props) => {
  const cartItemCards = cartItems.map((cartItem) => {
    return (
      <CartItemCard
        key={cartItem.product.id}
        cartItem={cartItem}
        onAddCartItem={onAddCartItem}
        onDecrementCartItem={onDecrementCartItem}
        onRemoveCartItem={onRemoveCartItem}
      />
    );
  });

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div id="cart" className="">
      <h5 className="mb-4">
        Your Cart has <strong>{totalCartItems}</strong> item(s) in it
      </h5>

      <div id="cart-items" className="mb-4">
        {cartItemCards}
      </div>

      <div className="cart-summary border-top pt-3">
        <h5 className="d-flex justify-content-between align-items-center p-3 border rounded bg-light">
          <span>Total Price:</span>
          <span className="fw-bold">${totalPrice.toFixed(2)}</span>
        </h5>
        <button className="btn btn-success w-100 mt-2 p-2">
          <i className="bi bi-credit-card me-2"></i>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
