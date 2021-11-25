import axios from "axios";
import { useState, useEffect } from "react";
import GetQuizCountry from "./quizCountryContainer";

const CountryContainer = () => {
    const [countries, setCountries] = useState(null)

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
        .then(response => setCountries(response.data))
    }, []);

    return (
        countries ?
        <GetQuizCountry countries={countries} />
        :
        <p>loading...</p>
    )
}


export default CountryContainer;