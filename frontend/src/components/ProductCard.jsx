import PropTypes from "prop-types";

const ProductCard = ({ product, onAdd }) => {
  return (
    <article className="product-card">
      <div className="product-header">
        <span className="product-category">{product.category}</span>
        <span className="product-rating">⭐ {product.rating}</span>
      </div>
      <h3>{product.name}</h3>
      <p className="product-price">{product.price} ر.س</p>
      <p className="product-stock">متوفر: {product.stock}</p>
      <button type="button" onClick={() => onAdd(product)}>
        أضف للسلة
      </button>
    </article>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired
  }).isRequired,
  onAdd: PropTypes.func.isRequired
};

export default ProductCard;
