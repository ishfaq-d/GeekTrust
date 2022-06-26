import React, { useContext, useEffect, useRef, useState } from "react";
import VehicleSelector from "./VehicleSelector";
import {MyContext} from './FindingFacone'

function PlanetSelector({count}){

    const [value, setValue] = useState('Select')

    const context = useContext(MyContext);

    const {planets} = context; 

    count--;

    if(count<0) return;

    const handleChange =(e) => {
        setValue(e.target.value)
       
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
            <VehicleSelector count={count}/>
                
            </div> 
        </section>

        <PlanetSelector style={{display: 'inline-block'}} planets={planets}  count={count}/>
       
        </>
    )
}

export default PlanetSelector