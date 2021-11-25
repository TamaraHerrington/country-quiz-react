import Card from "../Comps/Card";
import CountryComp from "../Comps/CountryComp";
import NextButton from "../Comps/NextButton";
import { useState, useEffect, useMemo } from "react";
import BackButton from "../Comps/BackButton";
import Hint from "../Comps/Hint.js";
import HintZero from "../Comps/HintZero";



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
    index = 5;
    const initialState = newCountries[0];
    const[country, setCountry] = useState(initialState);

    useEffect(()=>{
        setCountry(newCountries[index])
    }, [])

    let hintNumber = 0

    const increaseIndex = () => {
        if (index < 19){
            index++
            setCountry(newCountries[index])
            hintNumber = 0
            console.log(index)
        }
    }
    
    const decreaseIndex = ()=>{
        if (index > 0 ){
            index --
            setCountry(newCountries[index])
            hintNumber = 0
        }
    }

    const getHint = (hintNumber) => {
        if (hintNumber === 0){
            HintZero = true
            HintOne = false
            HintTwo = false
        }else if(hintNumber===1){
            HintZero = true
            HintOne = true
            HintTwo = false
        }else{
            HintZero = true
            HintOne = true
            HintTwo = true
        }
    }

    const increaseHint = ()=>{
        if (hintNumber <2 ){
            hintNumber++ 
        }
    }

    return (
        countries ?
        <>
        {/* <CountryComp countries={newCountries} index={index} /> */}
        <Card country={country} />
        <NextButton onClick={increaseIndex}/>
        <BackButton onClick={decreaseIndex}/>
        {/* <HintZero hintVisible={HintZero}/> */}
        <Hint onClick={increaseHint}/>
        </>

        :
        <p>loading...</p>
    )
}

export default GetQuizCountry