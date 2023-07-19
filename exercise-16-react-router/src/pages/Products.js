import React from "react";
import { Link } from "react-router-dom";
const PRODUCTS = [
    {id:'p1', title:'Product 1'},
    {id:'p1', title:'Product 2'},
    {id:'p1', title:'Product 3'}
]

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
       {PRODUCTS.map(item=> <li>
          <Link to={`${item.id}`}>{item.title}</Link>
        </li>)}
      </ul>
    </>
  );
};

export default Products;
