import React from 'react'
import OrderDetail from './OrderDetail';
import "./Orders.css";
import LunchView from './LunchView';
import { db } from '../../firebase.js';
import { v4 as uuidv4 } from 'uuid';


const LunchMenu = () => {

    const [menuAlmuerzo, setMenu] = React.useState([])

    React.useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch('https://luzciel.github.io/Burgen-queen/src/data/menu.json')
        const fullMenu = await data.json()
        setMenu(fullMenu.almuerzo)
        console.log(fullMenu.almuerzo)
    }

    
    const [cart, setCart] = React.useState([])
    
    React.useEffect(() => {
    }, [cart])



    //Funcion que agrega el producto a la Orden     
    const addProduct = id => {
        const item = menuAlmuerzo.filter((item) => item.id === id);
        const product= {}
        const listCars = item.map((item) => {
        product.id = uuidv4();
        product.producto = item.producto;
        product.opcion ='';  //aqui deberia ir la opcion pollo, carne, veg
        product.precio = item.precio;
        product.cantidad = 1;
        product.extraHuevo = false; // true o false
        product.extraQueso = false; // true o false
    })

    setCart([...cart, product])//... spread operator  o spread syntax trae las propiedades del objeto
    }

  //   // Funcion que agrega la colleccion a firebase
  // const addCollectionOrders = async (order) => {
  //   await db.collection('Orders').add({
  //       dateOrder: new Date(),
  //       product: order,
  //       status: "En espera",
  //     })
  //     .then(function (docRef) {
  //       console.log("NEW COLECTION")
  //     })
  //     .catch(function (error) {
  //       console.error("Error adding document: ", error);
  //     });
  // };
  
 // Funcion que agrega la colleccion a firebase
  const addCollectionOrders = async (order) => {
    try {
      const docRef = await db.collection('Orders').add({
          dateOrder: new Date(),
          status: "En espera",
          product: order,
        })
      console.log("NEW COLECTION")
    } catch (error) {
      console.error("Error adding document: ", error);
    }

  };

    return (
      <div className="container menus">
        <div className="lunch-menu ">
          {menuAlmuerzo.map((item) => (
            <div key={item.id} className="unicard card">
              <h1 className="product-name">{item.producto}</h1>
              <img src={item.img} alt="imgMenu" className="product-image" />
              <button type="button" className="product-price">
                ${item.precio}
              </button>
  
              {/* si item tiene opciones, recorre "opciones" y muestrame un select con las opciones */}
              {(() => {
                if (item.opciones) {
                  return (
                    <select
                      class="form-select"
                      aria-label="Default select example">
                      {item.opciones.map((x) => (
                        <option value={x.id} key={x.id}>
                          {x.opcion} ${x.precio}
                        </option>
                      ))}
                    </select>
                  );
                }
              })()}
  
              {/* extras */} 
              {/* si item tiene extra, recorre "extra" y muestrame un boton con los extras (huevo-queso) */}
              {(() => {
                if (item.extra) {
                  return (
                      <div>
                      {item.extra.map((x) => (
                        <button type="button" className="additional-button-egg" key={x.id} >
                       {x.adicional}: ${x.precio}
                      </button>
                      ))}
                      </div>
                    
                  );
                }
              })()}
  
              <button type="button" className="add-button" onClick={() => addProduct(item.id)}>
                + Añadir
              </button>
            </div>
          ))}
        </div>
            <div className='breakfast-cart'>
                <OrderDetail
                    cart={cart}
                    setCart={setCart}
                    addCollectionOrders={addCollectionOrders}/>
            </div>


        </div>
    )

}


export default LunchMenu





    
    



    
   

