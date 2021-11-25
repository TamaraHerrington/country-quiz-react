import Card from "./Card";

const CountryComp =(props)=>{
    console.log(props.countries)
    const country = props.countries[props.index]
    return(
        <Card name={country.name.common} />
    );
}

export default CountryComp;