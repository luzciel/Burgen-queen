import React from 'react'
import "./Orders.css"

const BreakfastMenu = () =>{
    
            //console.log ('hola desayuno')
        const [menu, setMenu] = React.useState([])

            React.useEffect(() => {
                //const data  = await fetch('https://luzciel.github.io/Burgen-queen/src/data/menu.json')
                //console.log('useEffect')
                getData()
                console.log(menu)
            }, [])

            const getData = async () => {
               const data  = await fetch('https://luzciel.github.io/Burgen-queen/src/data/menu.json')
                const desayuno = await data.json()
                const options = desayuno.desayuno
                setMenu(desayuno)
                


            }
   

    return (
   
        <div>
            {
            menu.forEach(item =>(
                    <li key={item.id}>{item.producto} - {item.precio} - {item.img}</li>
                ))
            }  
        </div>
    )

}


export default BreakfastMenu


