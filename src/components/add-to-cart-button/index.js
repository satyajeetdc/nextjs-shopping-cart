"use client";

import { Button } from "@/components/ui/button";
import { addToCart, removeFromCart } from "@/store/slices/cart-slice";
import { useDispatch, useSelector } from "react-redux";

export default function AddToCartButton({ productItem }) {
  const { cart } = useSelector((state) => state);
  console.log(cart?.cartItems);

  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(productItem));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(productItem?.id));
  }

  return (
    <div className="mt-8 max-w-md">
      <Button
        type="button"
        onClick={
          cart?.cartItems.some((item) => item.id === productItem.id)
            ? handleRemoveFromCart
            : handleAddToCart
        }
      >
        {cart?.cartItems.some((item) => item.id === productItem.id)
          ? "Remove from cart"
          : "Add to Cart"}
      </Button>
    </div>
  );
}
