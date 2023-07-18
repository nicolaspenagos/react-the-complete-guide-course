import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartItemsToRender = cartItems.map((item, index) => (
    <CartItem item={item} key={index} />
  ));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItemsToRender.length > 0 && <ul>{cartItemsToRender}</ul>}
      {cartItemsToRender.length === 0 && <p>The cart is empty</p>}
    </Card>
  );
};

export default Cart;

