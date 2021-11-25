import Card from "../Comps/Card";
//import CountryComp from "../Comps/CountryComp";
import NextButton from "../Comps/NextButton";
import { useState, useEffect, useMemo } from "react";



const GetQuizCountry = ({countries}) => {

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

    // const newCountries = countries.sort(() => 0.5 - Math.random()).slice(0,20);
    // //countries = countries.slice(0,20);
    // //const newCountries = useMemo(() => [...countries]);
    // let index = 0;
    // const initialState = newCountries[0];
    
    const[country, setCountry] = useState(countries[0]);
    console.log(countries)

    useEffect(()=>{
        setCountry(countries[index])
    }, [])

    const increaseIndex = () => {
        if (index < 19){
            setIndex(index+1)
            setCountry(countries[index])
            console.log(index)
        }
    }

    const [index, setIndex] = useState(0);
    useEffect(() => {
        setIndex(index+1);
    }, [])

    return (
        countries ?
        <>
        <Card country={country} />
        <NextButton onClick={increaseIndex}/>
        </>
        
        :
        <p>loading...</p>
    )
}

export default GetQuizCountry