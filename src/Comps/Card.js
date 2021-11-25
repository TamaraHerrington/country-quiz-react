const Card =(props)=>{
    const country = props.country
    console.log(country)
    return(
        <div>
            <p>{country.name.common}</p>
        </div>
    )
}

export default Card;