import React from 'react'
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
   

    return (
   
        <div>
          {
                 menu.map( item =>(
                     <li key={item.id}>{item.producto} - {item.precio}</li>
                 ))
             }   
        </div>
    )

}


export default BreakfastMenu


