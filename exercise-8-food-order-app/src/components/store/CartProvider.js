import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartitem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartitem) {
      const updatedItem = {
        ...existingCartitem,
        amount: existingCartitem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }


    if (action.type === 'CLEAR') {
      return defaultCartState;
    }
    //const updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }


  if (action.type === "REMOVE") {
    let updatedItems;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartitem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartitem.price;

    if (existingCartitem.amount===1) {
        updatedItems=state.items.filter(item=>item.id!==action.id);
      } else {
        const updatedItem={...existingCartitem, amount:existingCartitem.amount-1};
        updatedItems=[...state.items];
        updatedItems[existingCartItemIndex]=updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({type: 'CLEAR'});
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
