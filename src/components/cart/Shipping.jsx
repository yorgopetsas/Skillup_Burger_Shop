import React from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Información de envío</h1>
        <form>
          <div>
            <label>Calle y N.</label>
            <input type="text" placeholder="Introducir el nombre de la calle y el número." />
          </div>
          <div>
            <label>Ciudad</label>
            <input type="text" placeholder="Introducir Ciudad" />
          </div>
          <div>
            <label>País</label>

            <select>
              <option value="">España</option>
              {/* {Country && Country.getAllCountries().map((i) => ( */}
              {/* <option value="{i.isoCode}" key="{i.isoCode}"> */}
                {/* {i.name}        */}
                {/* </option> */}
                {/* ))} */}
            </select>
          </div>
          <div>
              {/* Add the code for the STATE DROPDOWN*/}
            <label>Estado/Provincia</label>
              <select>
                <option value="">Estado/Provincia</option>
                {State && State.getStatesOfCountry("ES").map((i) => (
                <option value="{i.isoCode}" key="{i.isoCode}">
                  {i.name}
                </option>
                ))}
            </select>
          </div>
          <div>
            <label>Código Postal</label>
            <input type="number" placeholder="Introducir código Postal" />
          </div>
          <div>
            <label>N.º de teléfono</label>
            <input type="number" placeholder="Ingresa tu número telefónico" />
          </div>          
          <Popup trigger=
                {<button type = "button">Confirmar Pedido</button>}
                position="right center">
                <div style={{color:"red",position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Confirmar Pedido</div>
               
            </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
