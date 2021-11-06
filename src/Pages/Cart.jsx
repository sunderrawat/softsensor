import { useEffect, useState } from "react";
import ProductItem from "../Components/Card/ProductItem";
import classes from "./Homepage.module.css";
function Cart() {
  const [items, setItems] = useState();
  const [clearCart, setClearCart] = useState(false); 
  function removeAllCart(){
      localStorage.clear();
      setClearCart(true);
  }
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("items")));
  }, [clearCart]);
  return (
    <div>
      <h1>Items in Your Cart Are</h1>
      <button className={classes.btn} onClick={removeAllCart}>
        Remove All Items From Cart
      </button>
      <div className={classes.container}>
        {items ? (
          items.map((data) => {
            return <ProductItem key={data.key} data={data}></ProductItem>;
          })
        ) : (
          <h1>No item in Your Cart</h1>
        )}
      </div>
    </div>
  );
}

export default Cart;
