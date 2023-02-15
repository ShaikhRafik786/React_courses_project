import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../B-Products/ProductCard";
import { useDispatch } from "react";
import { NavItem } from "react-bootstrap";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const Dispatch = useDispatch();
  //  console.log(products);
  const getProducts = async () => {
    const apiData = await axios.get("https://fakestoreapi.com/products");
    console.log("api data", apiData.data);
    setProducts(apiData.data);
  };
  Dispatch({ type: "ADD-Products", data: apiData.data });

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <h1>This is main Product list data</h1>

      {products.map(() => {
        return (
          <div>
            <h2>{item.data}</h2>
            <h3>{item.name}</h3>
            <h4>{item.title}</h4>
            <h3>{item.descreption}</h3>
            <h4>{item.id}</h4>
            <li>
              <img src={item.image} alt="" />
            </li>
          </div>
        );
      })}
    </div>
  );
};
