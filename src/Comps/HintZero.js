const HintZero = (props) => {
    const country = props.country
    return (
        props.hintVisible ? 
        <image src= {country.flags.png}/>
        :
        <> </>
    )
}

export default HintZero;