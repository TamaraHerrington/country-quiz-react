import Card from "./Card";

const CountryComp =(props)=>{
    return(
        <div>
            {props.countries.map(country=><Card name = {country.name.common}/>)}
        </div>
    );
}

export default CountryComp;