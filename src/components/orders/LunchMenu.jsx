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
        setCart([...cart, ...item])//... spread operator  o spread syntax trae las propiedades del objeto
    }


    return (

        <div className='container menus'>
            <div className='lunch-menu '>
                {
                    menuAlmuerzo.map(item => (
                        <div key={item.id} className='unicard card'>
                            <h1 className='product-name' >{item.producto}</h1>
                            {/* {item.img}  */}
                            <button type='button' className='product-price'>${item.precio}</button>
                            <button type='button' className='additional-button-egg'>Huevo: 500</button>
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
