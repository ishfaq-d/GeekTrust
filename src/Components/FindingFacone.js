import axios from "axios";
import React,{useEffect, useState,createContext} from "react";
import PlanetSelector from "./PlanetSelector";

export const MyContext = createContext(null)

function FindingFalcone(){

    const [planets, setPlanets] = useState()
    const [vehicles, setVehicles] = useState()

    let count = 4;

    useEffect(()=> {
        async function fetchData(){
            const {data: planets} = await  axios.get('https://findfalcone.herokuapp.com/planets')
            setPlanets(planets)

            const {data: vehicles} = await axios.get('https://findfalcone.herokuapp.com/vehicles')

            console.log('veh', vehicles)

            setVehicles(vehicles)

        }

        fetchData()

    },[])


    return (
    <MyContext.Provider value={{vehicles:vehicles, setVehicles:setVehicles, planets:planets, setPlanets:setPlanets,count:count}}>
        <h1>Finding Falcone!</h1>
        <h2> Select planets you want to serach in:</h2>
        <section >
                <PlanetSelector style={{display: 'inline-block'}} count={count}/>
        </section>
    </MyContext.Provider>
    )
}

export default FindingFalcone