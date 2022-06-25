import React, { useEffect, useRef, useState } from "react";

function PlanetSelector({planets,vehicles, setVehicles,count}){

    const [value, setValue] = useState('Select')

    const current  = useRef()

    const [selected, setSelected] = useState()
    const [number, setNumber] = useState()





    // const [rem, setRem] = useState(vehicles)

    const handleChange =(e) => {
        setValue(e.target.value)
       
    }

    count--;

    if(count<0) return;

    const handleChange1 = e => {
        
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
  

    return(
        <>
        <section className="selector-root">
            <select className="selector-select"  name="planets" id="planets" value={value} onChange={handleChange}>
            { planets && planets.map((planet, index) => {
                    return <option value={planet.name   }>{planet.name}</option>
            }) }
                
            </select>
            <div >
                {vehicles && vehicles.map((vehicle, index) => {
                    

                    return (
                        <>
                        <input ref={current} disabled={vehicle.total_no === 0} type="radio" id="html" name={count} value={vehicle.name} total_no={vehicle.total_no}  onChange={handleChange1}/>
                        <label for={count}>{vehicle.name}</label>
                        <span>({vehicle.total_no})</span><br/>
                         
                        </>
                           
                        )
                })}
            </div> 
        </section>

        <PlanetSelector style={{display: 'inline-block'}} planets={planets} vehicles={vehicles} setVehicles={setVehicles}  count={count}/>
       
        </>
    )
}

export default PlanetSelector