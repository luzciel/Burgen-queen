import React from 'react'
import NumberTable from './NumberTable'

const Tables = () => {
    console.log("Mesasssss")
    return (
        <div>
            <h1>Elige un mesa</h1>
            <buttom style={{width: "200px"}}>MESAS</buttom>
            <div>
                <NumberTable />
            </div>
        </div>
    )
}
export default Tables;