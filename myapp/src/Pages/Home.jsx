import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './PageStyles.css'
import Car1 from '../Assets/car1.jpeg'
import Car2 from '../Assets/car2.jpeg'
import CarList from '../Components/CarList';

import Cars from "../Data/CarData";



function Home() {
    const [cars,setCars] = useState("")

    function handleClick(item) {
        item.map(e =>  console.log(e.name))
       
    }
  return (
    <>
        <Carousel variant="dark" className='home'>
      <Carousel.Item color = "light">
        <img
          className="d-block w-80"
          src={Car1}
          alt="First slide"
        />
        <Carousel.Caption className='caption'>
          <h3>BUY CARS</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80"
          src={Car2}
          alt="Second slide"
        />

        {/* <Carousel.Caption className='caption'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

    </Carousel>

    <CarList className = "carlist"  cars ={Cars}  />
    </>


  );
}

export default Home;