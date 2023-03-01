import {React,useState} from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";


function CarList({cars}) {

  const [searchCar, setSearchCar] = useState("")

  function searchFun(item){
    if(searchCar ==""){
      return item
    }
    else if( item.name.toLowerCase() == searchCar.toLowerCase()|| item.color.toLowerCase() == searchCar.toLowerCase()){
      return item
    }
  }
  return (
    <div>

    <div className="search">
      <input placeholder="Saerch cars" onChange = {(e=>setSearchCar(e.target.value))}/>
    </div>
      <div className="carlist">
        {cars.filter((car)=>{ 
          {/* searchFun(car) */}
          if(searchCar ==""){
            return car
          }
          else if( car?.name?.toLocaleLowerCase() == searchCar.toLowerCase() ||car.color?.toLowerCase() == searchCar.toLowerCase() ){
            return car
          }
        }).map((car) => (
          <Card style={{ width: "18rem" }} key={car.id}>
            <Card.Img variant="top" src={car.image} />
            <Card.Body>
              <Card.Title >
                { car.name.toUpperCase()}
              </Card.Title>
            </Card.Body>
            <ListGroup>
              <ListGroup.Item>{car.price}</ListGroup.Item>
              <ListGroup.Item>{car.manufacturer}</ListGroup.Item>
              <ListGroup.Item>{car.color}</ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CarList;
