import { useState, useEffect } from "react";
import ProductItem from "../Components/Card/ProductItem";
import { ReactComponent as Spinner } from "./../assets/Spinner.svg";
import classes from "./Homepage.module.css";

function Homepage() {
  const [items, setItems] = useState();
  function getData() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
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
