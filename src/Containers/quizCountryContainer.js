const GetQuizCountry = ({countries}) => {
    countries = countries.sort(() => 0.5 - Math.random());
    countries = countries.slice(0,20);
    console.log(countries);
    return (
        countries ?
        <h1>hello</h1>
        :
        <p>loading...</p>
    )
}

export default GetQuizCountry