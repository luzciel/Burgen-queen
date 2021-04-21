import React from "react";
import OrderDetail from "./OrderDetail";
import "./Orders.css";
import { db } from '../../firebase.js';
import { v4 as uuidv4 } from 'uuid';

//accediendo a la data del menu...
const BreakfastMenu = (props) => {
  const [menu, setMenu] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://luzciel.github.io/Burger-queen/src/data/menu.json"
    );
    const fullMenu = await data.json();
    setMenu(fullMenu.desayuno);
  };

  const [cart, setCart] = React.useState([]);

  //aqui le decimos que esté atento a cada actualizacion...
  React.useEffect(() => {
  }, [cart])

  //Funcion que agrega el producto a la Orden     
  const addProduct = id => {
    const items = menu.filter((item) => item.id === id); //items es el nuevo array que se obtuvo del filter
    const product = {}
    const listCars = items.map((item) => {
      product.id = uuidv4();  //da un id unico
      product.producto = item.producto;
      product.opcion = item.opcion; //item.opciones //aqui deberia ir la opcion pollo, carne, veg
      product.precio = item.precio;
      product.cantidad = 1;
      product.adicional = item.adicional;
    })

    setCart([...cart, product])//... spread operator  o spread syntax trae las propiedades del objeto
  }

    // Funcion que agrega la colleccion a firebase
    const addCollectionOrders = async (order) => {
      const date = new Date();
      const fecha = `${(`00${date.getDate()}`)
        .slice(-2)}/${(`00${date.getMonth() + 1}`)
          .slice(-2)}/${date.getFullYear()} ${(`00${date.getHours()}`)
            .slice(-2)}:${(`00${date.getMinutes()}`)
              .slice(-2)}:${(`00${date.getSeconds()}`)
                .slice(-2)}`;
      try {
        const docRef = await db.collection('Orders').add({
          dateOrder: fecha,
          status: "En espera",
          product: order,
        })
      } catch (error) {
        console.error("Error adding document: ", error);
      }
  
    };


  return (
    <div className="container menus">
      <div className="breakfast-menu ">
        {menu.map((item) => (
          <div key={item.id} className="unicard card">
            <h1 className="product-name">{item.producto}</h1>
            <img src={item.img} alt="imgMenu" className="product-image" />
            <button type="button" className="product-price">
              ${item.precio}
            </button>

            {/* SELECT CON OPCIONES - si item tiene opciones, recorre "opciones" y muestrame un select con las opciones */}
            {(() => {
              if (item.opciones) {
                item.opcion = item.opciones[0].opcion;
                return (
                  <select
                    class="form-select"
                    aria-label="Default select example" onChange={(e) => item.opcion = e.target.value} >
                    {item.opciones.map((x) => (
                      <option value={x.opcion} key={x.id} >
                        {x.opcion}  $ {x.precio}
                      </option>
                    ))}
                  </select>
                );
              }
            })()}
            {/* boton añadir a la orden */}
            <button
              type="button"
              className="add-button"
              onClick={() => addProduct(item.id)}>
              + Añadir
            </button>
          </div>
        ))}
      </div>
      {/* carrito que que contiene la orden desayuno */}
      <div className='breakfast-cart'>
        <OrderDetail
          cart={cart}
          setCart={setCart}
          addCollectionOrders={addCollectionOrders} />
      </div>
    </div>
  );
};

export default BreakfastMenu;
