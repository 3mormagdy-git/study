import CartSummery from "./CartSummery";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
export default function Cart() {
    
    const navigate = useNavigate();
    const { state } = useCart();
    const { cartItems } = state;
    if (cartItems.length === 0) {
        return (
            <div>
                <h1> Your Cart is empty</h1>
                <button onClick={() => navigate("/") }  > Go to Home</button>
            </div>
        )
    }

    return (
        <div>
            <div>
                <div>
                    <h1> Hpme&gt;  </h1>
                    <h2>Cart</h2>
                </div>
                <h1> Your Cart</h1>
            </div>
            <div>
                <div>
                    {cartItems.map((item) => (<CartItem kay={item.id} item={item} />))}
                </div>
                <div>
            <CartSummery/> </div>
            </div>
        </div>

    );
}



