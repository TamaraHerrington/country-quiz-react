import Card from "../Comps/Card";
import CountryComp from "../Comps/CountryComp";
import NextButton from "../Comps/NextButton";
import { useState, useEffect, useMemo } from "react";



const GetQuizCountry = ({countries , index}) => {

    // let newCountries = countries.sort(() => 0.5 - Math.random());
    // newCountries = countries.slice(0,20);
    // console.log(newCountries);
    // index = 0;
    // const initialState = newCountries[0];
    // const[country, setCountry] = useState(initialState);

    // useEffect(()=>{
    //     setCountry(newCountries[index])
    // }, [newCountries, index])

    // const increaseIndex = () => {
    //     if (index < 19){
    //         index++
    //         setCountry(newCountries[index])
    //         console.log(index)
    //     }
    // }

    countries = countries.sort(() => 0.5 - Math.random());
    countries = countries.slice(0,20);
    const newCountries = useMemo(() => [...countries]);
    index = 0;
    const initialState = newCountries[0];
    const[country, setCountry] = useState(initialState);

    useEffect(()=>{
        setCountry(newCountries[index])
    }, [])

    const increaseIndex = () => {
        if (index < 19){
            index++
            setCountry(newCountries[index])
            console.log(index)
        }
    }
    
    return (
        countries ?
        <>
        {/* <CountryComp countries={newCountries} index={index} /> */}
        <Card country={country} />
        <NextButton onClick={increaseIndex}/>
        </>
        
        :
        <p>loading...</p>
    )
}

export default GetQuizCountry