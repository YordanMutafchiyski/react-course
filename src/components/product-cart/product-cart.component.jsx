import './product-cart.styles.scss';
import { clearItemFromCart, removeItemFromCart, addItemToCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from '../../store/cart/cart.selector';
const ProductCart = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems,cartItem));
  const decrementQuantity = () => dispatch(removeItemFromCart(cartItems,cartItem));
  const incrementQuantity = () => dispatch(addItemToCart(cartItems, cartItem));
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={decrementQuantity}  >
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={incrementQuantity}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default ProductCart;
