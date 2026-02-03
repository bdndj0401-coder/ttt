import PropTypes from "prop-types";

const CartSummary = ({ items, total }) => {
  return (
    <aside className="cart-summary">
      <h2>ملخص السلة</h2>
      <p>العناصر: {items}</p>
      <p className="cart-total">الإجمالي: {total} ر.س</p>
      <button type="button">إتمام الطلب</button>
    </aside>
  );
};

CartSummary.propTypes = {
  items: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default CartSummary;
