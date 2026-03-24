import { createContext, useReducer, useContext, useState } from "react";

// Define the logic in one place
const initialCartState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.find((item) => item.id === action.payload.id)) return state;
      return [...state, action.payload];
    case "REMOVE_FROM_CART":  
      return state.filter((item) => item.id !== action.payload);
    case "CLEAR_CART":
      return []
    default:
      return state;
  }
}

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  return (
    <CartContext.Provider value={{ cart, dispatch, enrolledCourses, setEnrolledCourses }}>
      {children}
    </CartContext.Provider>
  );
};

export const UseCart = () => useContext(CartContext);
