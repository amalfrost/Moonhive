import React from 'react'
import CarList from '../Components/CarList'
import Cars from "../Data/CarData";


function CarsPage() {
  return (
    <div>
      <CarList cars ={Cars}/>
    </div>
  )
}

export default CarsPage
