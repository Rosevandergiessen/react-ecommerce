import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { setIsCartOpen } from '../../store/cart/cart.action';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CartTotal
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartTotal = useSelector(selectCartTotal);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    toggleIsCartOpen();
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CartTotal>Total: €{cartTotal}</CartTotal>
      {cartItems.length ? (
        <Button onClick={goToCheckoutHandler}>TO CHECKOUT</Button>
        ) : (
        <Button onClick={goToCheckoutHandler} disabled='true'>TO CHECKOUT</Button>
        )}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
