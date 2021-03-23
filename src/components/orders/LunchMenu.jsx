import React from 'react'
import OrderDetail from './OrderDetail'
import "./Orders.css"
import LunchView from './LunchView'


const LunchMenu = () =>{
    
        const [menu, setMenu] = React.useState([])

            React.useEffect(() => {
                getData()
                console.log(menu)
            }, [])

            const getData = async () => {
                const data = await fetch('https://luzciel.github.io/Burgen-queen/src/data/menu.json')
                const almuerzo = await data.json()
                setMenu(almuerzo.almuerzo)
                console.log(almuerzo.almuerzo)
            }
   
        const [cart, setCart] =  React.useState([]) 

        
        // //Funcion que agrega el producto a la Orden     
        // const addProduct = id => {
        //     const product = menu.filter((item) => item.id === id)
        //}

    return (
   
        <div className='container menus'>
            <div>
            <h2>Menu</h2>
          { menu.map(item =>(
              <LunchView 
              key={item.id}
              item={item}
              cart={cart}
              setCart={setCart}
              menu={menu}
              />
              ))}   
            </div>

            <div>
            {<OrderDetail
            cart={cart}
            setCart={setCart} />}
            </div>

        </div>
    )

}


export default LunchMenu
