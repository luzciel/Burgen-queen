import React from 'react'
import "../components/orders/Orders.css"
// import OrdersInpunts from '../components/orders/OrdersInputs'
import MenuButtons from '../components/orders/MenuButtons'
import BreakfastMenu from '../components/orders/BreakfastMenu'
import OrdersInputs from '../components/orders/OrdersInputs'
//import orders from '../components/orders/OrdersInputs'
import LunchMenu from '../components/orders/LunchMenu'
import OrderDetail from '../components/orders/OrderDetail'
import LunchView from '../components/orders/LunchView'



const OrdersViews = (props) => {

  const [btnDesayuno, setBtnDesayuno] = React.useState('Desayuno'); // estado del boton desayuno 

  const [showBreakfast, setshowBreakfast] = React.useState(false); // estado del menu desayuno inicializado en false
  const [showLunch, setShowLunch] = React.useState(false); // estado del menu Almuerzo inicializado en false

  // Funcion que cambia el estado showBreakfast (menu desayuno)
  const toggleBreakfast = () => { 
    setshowBreakfast(true)
    setShowLunch(false)
  }

  // Funcion que cambia el estado showBreakfast (menu desayuno)
  const toggleLunch = () => {
    setshowBreakfast(false)
    setShowLunch(true)
  }
  
  return (
    <div>
        <OrdersInputs/>
        <input type="text" className="tableNumber" placeholder="Mesa" value={`Mesa ${props.match.params.numTable}`} />
        <hr className="hrOrders"></hr>

        <MenuButtons  //propiedades del componente hijo (MenuButtons)
         btnDesayuno={btnDesayuno}     
         breakfastClick ={()=>{toggleBreakfast()}}  
         lunchClick={()=>{toggleLunch()}}
         /> 

        {showBreakfast ? <BreakfastMenu/> : <LunchMenu/> } {/* si showBreakfast es true se muestre el menu del desayuno y sino se muestre el menu del almuerzo  */}

    
    </div>

)

}

export default OrdersViews

// // class OrdersViews extends React.Component{ //extiende la funcionalidad del componenete - orderViews es el padre
// //     constructor(props) {
// //         super (props); 
// //         this.state = {    //este es el estado
// //             btnDesayuno: 'Desayuno',
// //             showBreakfast: false,
// //             showLunch: false,

// //         }
      
// //     }
// //      //funcion toogle
// //     toggleBreakfast(){   
        
// //         this.setState({showBreakfast: true}) //setState cambia los valores del estado 
// //         this.setState({showLunch: false}) //setState cambia los valores del estad
// //         // if(this.state.showBreakfast){
// //         // this.setState({btnDesayuno :'ocultar Desayuno'}) 
// //         // } else {
// //         //     this.setState({btnDesayuno :'ver Desayuno'}) 
// //         // }
// //     }

// //     toggleLunch(){
// //         this.setState({showLunch: true})
// //         this.setState({showBreakfast: false})
// //     }


//     render () {
//        let breakfast;
//        if (this.state.showBreakfast) { //aqui esta validando que showBreakfast sea true y en ese caso es = a <BreakfastMenu/>
//         breakfast = <BreakfastMenu/>
//        }

//        let lunch;
//        if (this.state.showLunch) { //aqui estoy validando que que si showLunch es true es = a <LunchMenu/>
//         lunch = <LunchMenu/>
//        }



//         return (
//             <div>
//                 <OrdersInputs/>
    
//                 <MenuButtons  //propiedades del componente hijo (MenuButtons)
//                  btnDesayuno={this.state.btnDesayuno}     
//                  breakfastClick ={()=>{this.toggleBreakfast()}}  
//                  lunchClick={()=>{this.toggleLunch()}}
//                  /> 
    
//                  {breakfast} {/*estoy llamando la variable que declare en el linea 38 que es igual al valor del componente */}

//                 {lunch}  {/*estoy llamando la variable que declare en el linea 45 que es igual al valor del componente */}


//                 {/* <div>
//                 <OrderDetail
//                   cart={cart}
//                   setCart={setCart} />
//                 </div>
//                  */}
//             </div>
    
//         )


//     }
// }