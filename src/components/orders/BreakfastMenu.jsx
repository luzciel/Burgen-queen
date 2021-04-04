import React from "react";
import OrderDetail from "./OrderDetail";
import "./Orders.css";

//accediendo a la data del menu...
const BreakfastMenu = (props) => {
  const [menu, setMenu] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://luzciel.github.io/Burgen-queen/src/data/menu.json"
    );
    const desayuno = await data.json();

    setMenu(desayuno.desayuno);
  };

  const [cart, setCart] = React.useState([]);

  //Funcion que agrega el producto a la Orden
  const addProduct = (id) => {
    const item = menu.filter((item) => item.id === id);
    setCart([...cart, ...item]);
  };
  

  // //subcategorias  ****
  // const subcategories = function (e) {
  //   const option = e.target.value;
  //   console.log(option);
  //   setMenu(option);
  // };

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
      <div className="breakfast-cart">
        {<OrderDetail cart={cart} setCart={setCart} />}
      </div>
    </div>
  );
};

export default BreakfastMenu;
