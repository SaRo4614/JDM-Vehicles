import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCart);

  const addToCart = (item, amount) => {
    const addItem = { ...item, amount };

    const newCart = [...cart];
    const isInCart = newCart.find((car) => car.id === addItem.id);

    if (isInCart) {
      isInCart.amount += amount;
    } else {
      newCart.push(addItem);
    }
    setCart(newCart);
  };

  const amountCart = () => {
    return cart.reduce((acc, car) => acc + car.amount, 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, car) => acc + car.price * car.amount, 0);
  };

  const empyCart = () => {
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        amountCart,
        totalPrice,
        empyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
