import React from 'react'
import OrderDetail from './OrderDetail'
import "./Orders.css"
import LunchView from './LunchView'
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
    }

    
    const [cart, setCart] = React.useState([])

    //aqui le decimos que esté atento a cada actualizacion...
    React.useEffect(() => {
    }, [cart])



    //Funcion que agrega el producto a la Orden     
    const addProduct = id => {
        const items = menuAlmuerzo.filter((item) => item.id === id); //items es el nuevo array que se obtuvo del filter
        const product= {}
        const listCars = items.map((item) => {
        product.id = uuidv4();  //da un id unico
        product.producto = item.producto;
        product.opcion =''; //item.opciones //aqui deberia ir la opcion pollo, carne, veg
        product.precio = item.precio;
        product.cantidad = 1;
        product.extraHuevo = false; // true o false
        product.extraQueso = false; // true o false
    })

    setCart([...cart, product])//... spread operator  o spread syntax trae las propiedades del objeto -  aqui le estoy diciendo que meta product en el carrito "cart"
    }



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
                        <option value={x.opcion} key={x.id} >
                          {x.opcion}  $ {x.precio}
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
  
  
              <button
                type="button"
                className="add-button"
                onClick={() => addProduct(item.id)}
              >
                + Añadir
              </button>
            </div>
          ))}
        </div>
            <div className='breakfast-cart'>
                <OrderDetail
                    cart={cart}
                    setCart={setCart} />
            </div>


        </div>
    )

}


export default LunchMenu





    
    



    
   

