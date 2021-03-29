import React from 'react'
import OrderDetail from './OrderDetail'
import "./Orders.css"
import LunchView from './LunchView'


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




    //Funcion que agrega el producto a la Orden     
    const addProduct = id => {
        const item = menuAlmuerzo.filter((item) => item.id === id);
        const product= {}
        const listCars = item.map((item) => {
        product.id = item.id;
        product.producto = item.producto;
        product.opcion ='';  //aqui deberia ir la opcion pollo, carne, veg
        product.precio = item.precio;
        product.cantidad = 1;
        product.extraHuevo = false; // true o false
        product.extraQueso = false; // true o false
    })

    setCart([...cart, product])//... spread operator  o spread syntax trae las propiedades del objeto
        console.log(cart, 5555)
    }





    return (

        <div className='container menus'>
            <div className='lunch-menu '>
                {
                    menuAlmuerzo.map(item => (
                        <div key={item.id} className='unicard card'>
                            <h1 className='product-name' >{item.producto}</h1>
                            <img src={item.img} alt="imgMenu"  className="product-image"/>
                            <button type='button' className='product-price'>${item.precio}</button>
                            <button type='button' className='additional-button-egg' >Huevo: 500</button>
                            <button type='button' className='additional-button-cheese'>Queso: 500</button>
                            <button type='button' className="add-button" onClick={() => addProduct(item.id)}>+ Añadir</button>
                        </div>
                    ))
                }
            </div>
            <div className='breakfast-cart'>
                {<OrderDetail
                    cart={cart}
                    setCart={setCart} />}
            </div>


        </div>
    )

}


export default LunchMenu
