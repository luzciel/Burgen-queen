import React from 'react'
import "./MenuButtons.css"
import Button from '@material-ui/core/Button'

const menuButtons = () =>{
    return (
    
        <div>
           <Button variant="text" color="secondary" variant="contained" className="breakfastButton" >
             Desayunos
           </Button>
             
        </div>
    )
    
    ReactDOM.render(menuButtons, document.getElementById('root'));
}

export default menuButtons