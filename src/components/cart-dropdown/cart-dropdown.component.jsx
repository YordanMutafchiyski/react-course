import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";
const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(false)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) =>  (
           <CartItem key={item.id} cartItem={item}></CartItem>
        ))}
      </div>
      <Link to='/checkout' onClick={toggleIsCartOpen}>
        <Button>GO TO CHECKOUT</Button>
      </Link>
      
    </div>
  );
};

export default CartDropdown;
