import CountryComp from "../Comps/CountryComp";

const GetQuizCountry = ({countries}) => {
    countries = countries.sort(() => 0.5 - Math.random());
    countries = countries.slice(0,20);
    console.log(countries);
    return (
        countries ?
        <CountryComp countries={countries} />
        :
        <p>loading...</p>
    )
}

export default GetQuizCountry