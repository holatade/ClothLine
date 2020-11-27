import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

//?  we cant use this because we know every time when a state changes, mapStateToProps is called on all
// component. Now even when we not changing state of a particular component and the mapStateToProps is called.
// Now the functions int this componeent i.e reduce function is still called even though the state is not changing.
//This is an overhead performance issue. wat we can do is store the value of this functions with the props so
// when the function is called with the state again, The function is not actually computed, but rather the value
// in the saved cache.
//To solve this we do wat is called memoization i.e caching of the selectors values
//! const mapStateToProps = ({ cart: { cartItems } }) => {
//   console.log("change");
//   return {
//     itemCount: cartItems.reduce(
//       (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
//       0
//     ),
//   };
// };

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
