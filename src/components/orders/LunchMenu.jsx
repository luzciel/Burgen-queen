import React from 'react'
import "./Orders.css"

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


export default LunchMenu
