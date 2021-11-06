import classes from "./ProductItem.module.css";
import Bag from "./../../assets/bag.jpg";
import { ReactComponent as CartIcon } from "./../../assets/cart-outline.svg";

function ProductItem(props) {
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
          <img src={Bag} alt="Product" className={classes["image-item"]} />
        </div>
      </div>
      <div className={classes.card__details}>
        <div className={classes.title}>Sandisk SSD 1 TB</div>
        <div className={classes.price}>Cost: &#36; 699</div>
        <div className={classes.btn}>
          <div className={classes.icon}>
            <CartIcon></CartIcon>
          </div>
          <span className={classes.btn__txt}>Add To Cart</span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
