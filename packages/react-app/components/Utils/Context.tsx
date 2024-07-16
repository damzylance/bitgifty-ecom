// context.tsx
import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { ItemProp } from "./Types";

// Define the state shape
interface State {
  cart: { item: ItemProp; quantity: number }[];
}

// Define action types
type Action =
  | { type: "ADD_TO_CART"; payload: { item: ItemProp; quantity: number } }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "INCREASE_ITEM"; payload: number }
  | { type: "DECREASE_ITEM"; payload: number }
  | { type: "CLEAR_CART" };

// Initial state
const initialState: State = {
  cart: [],
};

// Reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemToAdd = action.payload;

      const isAlreadyInsideCart = state.cart.find(
        (cart) => cart?.item?.id === itemToAdd?.item.id
      );
      if (isAlreadyInsideCart) {
        isAlreadyInsideCart.quantity += itemToAdd.quantity;

        return { ...state };
      }
      return { ...state, cart: [...state.cart, itemToAdd] };

    case "REMOVE_FROM_CART":
      return { ...state };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "INCREASE_ITEM":
      const itemToIncreaseId = action.payload;

      const itemToIncreaseTarget = state.cart.find(
        (cart) => cart?.item?.id === itemToIncreaseId
      );
      if (itemToIncreaseTarget) {
        itemToIncreaseTarget.quantity += 1;

        return { ...state };
      }
    case "DECREASE_ITEM":
      const itemToDecreaseId = action.payload;

      const itemToDecreaseTarget = state.cart.find(
        (cart) => cart?.item?.id === itemToDecreaseId
      );
      if (itemToDecreaseTarget) {
        if (itemToDecreaseTarget?.quantity < 2) {
          const newCart = state.cart.filter(
            (item) => item.item.id !== itemToDecreaseId
          );
          return { ...state, cart: newCart };
        } else {
          itemToDecreaseTarget.quantity -= 1;

          return { ...state };
        }
      }

    default:
      return state;
  }
};

// Create context
const StateContext = createContext<
  { state: State; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

// Context provider component
interface StateProviderProps {
  children: ReactNode;
}

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to use the context
export const useStateContext = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};
