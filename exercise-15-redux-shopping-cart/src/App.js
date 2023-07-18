import { useEffect} from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";
let isInitial = true;

function App() {
  const toggleCart = useSelector((state) => state.cart.toggleCart);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const changed = useSelector(state=>state.cart.changed)
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCartData());
  }, [dispatch])

  useEffect(() => {

    if(isInitial){
      isInitial=false;
      return;
    }

    if(changed){
      dispatch(sendCartData(cartItems))
    }
    
  }, [cartItems, dispatch, changed]);

  return (
    <>
      {notification && <Notification {...notification} />}
      <Layout>
        {toggleCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
