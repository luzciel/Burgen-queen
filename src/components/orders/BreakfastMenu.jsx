import React from 'react'
import OrderDetail from './OrderDetail'
import "./Orders.css"

const BreakfastMenu = () =>{
    
        const [menu, setMenu] = React.useState([])

            React.useEffect(() => {
                console.log('useEffect')
                getData()
            }, [])

            const getData = async () => {
                const data = await fetch('https://luzciel.github.io/Burgen-queen/src/data/menu.json')
                const desayuno = await data.json()
                
                setMenu(desayuno.desayuno)
            }

            const [cart, setCart] =  React.useState([]) 

        //Funcion que agrega el producto a la Orden     
        const addProduct = id => {
            const item = menu.filter((item) => item.id === id);
            setCart([...cart, ...item])
        }

    return (
        <div className='container menus'>
        <div className='breakfast-menu card '>
            {
                 menu.map( item =>(
                     <div key={item.id}>
                         <ul>
                             <li>{item.producto}</li>
                             <li>{item.img}</li>
                             <li>{item.precio}</li>
                             <button type='button' onClick={() => addProduct(item.id)}>Agregar</button>
                         </ul>
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


export default BreakfastMenu


