import React from 'react'
import "./Orders.css"

const BreakfastMenu = () =>{
    
            console.log ('hola desayuno')
        const [menu, breakfastMenu] = React.useState([])

            React.useEffect(() => {
                console.log('useEffect')
                getData()
            }, [])

            const getData = async () => {
                const data = await fetch('https://luzciel.github.io/Burgen-queen/src/data/menu.json')
                const menu = await data.json()
                console.log(menu)

            }
   

    return (
   
        <div>
         <h1>dessayuno</h1>  
        </div>
    )

}


export default BreakfastMenu


