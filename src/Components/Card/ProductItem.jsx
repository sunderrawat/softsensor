import { useState } from "react";
import classes from "./ProductItem.module.css";
import Bag from "./../../assets/bag.jpg";

import { ReactComponent as CartIcon } from "./../../assets/cart-outline.svg";
import { Link } from "react-router-dom";

function ProductItem(props) {
  const [addedToCart, setAddedToCart] = useState(false);
  const data = props.data;
  function addToCart(e){
    setAddedToCart(true);
    let items = [];
    if(localStorage.getItem("items")){
      let itemArr = JSON.parse(localStorage.getItem("items"))
      itemArr.map((item)=>{
        items.push(item);
      })
    }
    items.push(JSON.parse(e.currentTarget.dataset.item));
    localStorage.setItem("items", JSON.stringify(items));
  }
  return (
    <div className={classes.card}>
      <div className={classes.card__visual}>
        <div className={classes.features}>
          <div className={classes.features__gender}>
            <span className={classes.features__property}>Gender: </span>
            <span className={classes.features__value}>Male</span>
          </div>
          <div className={classes.features__color}>
            <span className={classes.features__property}>Color: </span>
            <span className={classes.features__value}>Black</span>
          </div>
        </div>
        <div className={classes.card__image}>
          <img
            src={data.image}
            alt="Product"
            className={classes["image-item"]}
          />
        </div>
      </div>
      <div className={classes.card__details}>
        <div className={classes.title}>
          {data.title.trim().length < 47
            ? data.title.trim()
            : `${data.title.trim().substring(0, 46)}...`}
        </div>
        <div className={classes.price}>Cost: &#36; {data.price}</div>
        {addedToCart ? (
          <Link to="/cart">
            {" "}
            <button className={`${classes.btn} ${classes.btn__viewcart}`}>View Cart</button>
          </Link>
        ) : (
          <button
            className={classes.btn}
            onClick={addToCart}
            data-item={JSON.stringify(data)}
          >
            <CartIcon className={classes.icon}></CartIcon>
            <span className={classes.btn__txt}>Add To Cart</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
