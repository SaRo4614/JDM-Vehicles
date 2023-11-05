import "../../components/ItemCount/ItemCount.css";

const ItemCountCart = ({ amount, handleSubtract, handleAdd }) => {
  return (
    <div className="item-count">
      <button onClick={handleSubtract} className="button-res">
        -
      </button>
      <p>{amount}</p>
      <button onClick={handleAdd} className="button-sum">
        +
      </button>
    </div>
  );
};

export default ItemCountCart;
