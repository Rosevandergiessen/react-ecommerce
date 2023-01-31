import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart/cart.action";
import { CartArrow, CartRemoveButton, ItemDetail, CartItemContainer, ItemDetails, Name, Img, Price, ChangeQuantity } from "./cart-item.styles";


const CartItem = ({cartItem}) => {
  const { name, imageUrl, quantity, price } = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));


  return(
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemDetail>
          <Name>{name}</Name>
          <Price>{quantity} x €{price}</Price>
        </ItemDetail>
      </ItemDetails>
        <ChangeQuantity>
          <CartArrow onClick={addItemHandler}>&#43;</CartArrow>
          <CartArrow onClick={removeItemHandler}>&#8722;</CartArrow>
        </ChangeQuantity>
        <CartRemoveButton onClick={clearItemHandler}>&#128465;</CartRemoveButton>
    </CartItemContainer>
  )
}

export default CartItem;
