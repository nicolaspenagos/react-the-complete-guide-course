import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function navigateHandler(){
    navigate('products')
  }
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go to the <Link to="products">the list of products</Link>
      </p>
      <button onClick={navigateHandler}>To products</button>
    </>
  );
};

export default Home;
