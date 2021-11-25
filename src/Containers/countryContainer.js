import axios from "axios";
import { useState, useEffect } from "react";
import GetQuizCountry from "./quizCountryContainer";
import NextButton from "../Comps/NextButton";


const CountryContainer = () => {
    const [countries, setCountries] = useState(null)

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
        //.then(response => setCountries(response.data))
        .then(response => {
            setCountries(response.data.sort(() => 0.5 - Math.random()).slice(0,20))
        })

    }, []);



    //let country = countries[0]
    // const increaseIndex = () => {
    //     if (index < 19){
    //         index++
    //         //country = countries[index]
    //         console.log(index)
            
    //     }
    // }

    return (
        countries ?
        <>
        <GetQuizCountry countries={countries}/>
        {/* <NextButton onClick={increaseIndex} /> */}
        </>
        :
        <p>loading...</p>
    )
}


export default CountryContainer;