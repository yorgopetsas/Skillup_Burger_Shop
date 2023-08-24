import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Producto" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const increment = (item) => {};

  const decrement = (item) => {};

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Hamburguesa con queso"}
          img={burger1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Hamburguesa vegetariana con queso"}
          img={burger2}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
       <CartItem
          title={"Hamburguesa con queso y patatas fritas"}
          img={burger2}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
 
       

        <article>
          <div>
            <h4>Subtotal</h4>
            <p>€{13,90}</p>
          </div>
          <div>
            <h4>Iva</h4>
            <p>€{13,90 * 0.21}</p>
          </div>
          <div>
            <h4>Costes de envío</h4>
            <p>€{2,30}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>€{13,90 + 13,90 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
