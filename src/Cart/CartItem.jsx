
import { useCart } from "./CartContext";
export default function CartItem({ item }) {
    const { dispatch } = useCart();


    return (
        <div>
            <div>
                <img src={item.img} alt={item.name} />
                <div>
                    <i className="bx bx-trash" onClick={() => dispatch({ type: "REMOCE-FROM-CART", payload: item.id })} ></i>
                </div>
                <div>
                    <span>ram</span>
                    <span>{ item.ram}</span>
                </div>
                <div>
                    <span>cpu</span>
                    <span>{item.cpu }</span>
                </div>
                <div>
                    <h1>${item.price}</h1>
                    <div>
                        <i className="bx bx-minus " onClick={() => dispatch({ type: "DECREMENT", payload: item.id })} ></i>
                        <i className="bx bx-plus" onClick={() => dispatch({ type :"INCREMENT",payload:item.id})} ></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
    

