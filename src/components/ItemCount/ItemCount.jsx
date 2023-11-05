import "./ItemCount.css";

const ItemCount = ({ amount, handleSubtract, handleAdd, addToCart }) => {
  return (
    <div>
      <div className="item-count">
        <button onClick={handleSubtract} className="button-res">
          -
        </button>
        <p className="amount">{amount}</p>
        <button onClick={handleAdd} className="button-sum">
          +
        </button>
      </div>
      <button className="add-to-cart" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCount;
