import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart-slice";

const CartButton = (props) => {

  const dispatch = useDispatch();
  const items = useSelector(state=>state.cart.cartItems);

  const noOfItems = items.reduce((accum, currentItem)=>accum+currentItem.quantity, 0);

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };
  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{noOfItems}</span>
    </button>
  );
};

export default CartButton;
