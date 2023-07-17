import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
function App() {

  const isAuth = useSelector(state=>state.auth.isAuthenticated);

  return (
    <>
      <Header/>
      {!isAuth&&<Auth/>}
      {isAuth&&<UserProfile/>}
      <Counter />
    </>
  );
}

export default App;
