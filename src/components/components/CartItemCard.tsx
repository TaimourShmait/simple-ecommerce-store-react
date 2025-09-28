import type { CartItem } from "../../types.ts";

interface Props {
  cartItem: CartItem;
  onAddCartItem: (cartItem: CartItem) => void;
  onDecrementCartItem: (id: number) => void;
  onRemoveCartItem: (id: number) => void;
}

const CartItemCard = ({
  cartItem,
  onAddCartItem,
  onDecrementCartItem,
  onRemoveCartItem,
}: Props) => {
  const itemTotal = cartItem.product.price * cartItem.quantity;

  return (
    <div className="cart-item-card d-flex justify-content-between align-items-center p-3 mb-3 border rounded bg-white shadow-sm">
      <div className="d-flex align-items-center gap-3">
        <img
          src={cartItem.product.image}
          alt={cartItem.product.name}
          className="cart-item-image"
        />
        <div>
          <h6 className="mb-1">
            {cartItem.product.name}{" "}
            <span className="text-muted fw-normal">×{cartItem.quantity}</span>
          </h6>
          <small className="text-muted">${cartItem.product.price} each</small>
        </div>
      </div>

      <div className="d-flex align-items-center gap-3">
        <div className="fw-bold">${itemTotal.toFixed(2)}</div>

        <div className="d-flex gap-1">
          <button
            className="btn btn-outline-warning btn-sm p-2"
            onClick={() => onDecrementCartItem(cartItem.product.id)}
          >
            <i className="bi bi-dash"></i>
          </button>

          <button
            className="btn btn-outline-primary btn-sm p-2"
            onClick={() => onAddCartItem(cartItem)}
          >
            <i className="bi bi-plus"></i>
          </button>

          <button
            className="btn btn-outline-danger btn-sm p-2"
            onClick={() => onRemoveCartItem(cartItem.product.id)}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
