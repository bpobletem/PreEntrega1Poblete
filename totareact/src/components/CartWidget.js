import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-widget-text">
            <span className="cart-widget-number">1</span>
        </span>
    </div>
  );
}

export default CartWidget;
