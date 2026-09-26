import { useCart } from "./CartContext";


export default function CartSummery() {
  
    const { state } = useCart();
    const { cartItems } = state;
    const totalItems = cartItems.reduce((sum,item)=>sum + item.quantity, 0);
    const subTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    
    const discount = subTotal * 0.1;
    const deliveryFee = 20;
    const total = subTotal - discount + deliveryFee
    return (
        <div>
            <h1> Order summery</h1>
            <div>
                <div>
                    <p>Subtotal</p>
                    <p>${subTotal }</p>
                </div>
                <div>
                    <p>Total Item</p>
                    <p>${totalItems }</p>
                </div>
                <div>
                    <p>Discount (-20%)</p>
                    <p>${discount }</p>
                </div>
                <div>
                    <p>Delivery fee</p>
                    <p>${deliveryFee }</p>
                </div>
                <div>
                    <p>Total</p>
                    <p>${total }</p>
                </div>
            </div>
            <button>Go to Checkout  </button>
        </div>
    )


}