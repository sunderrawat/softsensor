import { useState, useEffect } from "react";
import ProductItem from "../Components/Card/ProductItem";
import Nav from "../Components/Header/Nav";
import { ReactComponent as Spinner } from "./../assets/Spinner.svg";
import classes from "./Homepage.module.css";

function Homepage() {
  const [items, setItems] = useState();
  function getData() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
        <Nav />
      <div className={classes.container}>
        {items ? (
          items.map((data) => {
            return <ProductItem data={data} key={data.id}></ProductItem>;
          })
        ) : (
          <Spinner></Spinner>
        )}
      </div>
    </div>
  );
}

export default Homepage;
