import React,{useState, useContext} from "react"
import { MyContext } from "./FindingFacone"


function VehicleSelector({}){

    const context = useContext(MyContext);

    const {vehicles, setVehicles,count} = context;



    const [selected, setSelected] = useState()
    const [number, setNumber] = useState()


 const handleChange = e => {
        
    const name = e.target.value
  
    console.log('name', name)
  
    let updatedVehicles=[...vehicles]
  
  
    if(e.target.name === number) {
      updatedVehicles = updatedVehicles.map((vehicle)=> {
          if(vehicle.name === selected){
          return {...vehicle, total_no: vehicle.total_no+1}
          }
          return vehicle;
      })
    }
  
  
  
     updatedVehicles  = updatedVehicles.map((vehicle) => {
      if(vehicle.name === name  && vehicle.total_no !== 0){
          return {...vehicle, total_no: vehicle.total_no-1}
      }
      return vehicle
    })
  
  
    setVehicles(() => updatedVehicles)
    setNumber(e.target.name)
    setSelected(name)
  
  }

return (
    <>{vehicles && vehicles.map((vehicle, index) => {
                    

        return (
            <>
            <input type="radio" id="html" name={count} value={vehicle.name} total_no={vehicle.total_no} onChange={handleChange}/>
            <label for={count}>{vehicle.name}</label>
            <span>({vehicle.total_no})</span><br/>
            </>
               
            )
    })}</>
)

}

export default VehicleSelector;