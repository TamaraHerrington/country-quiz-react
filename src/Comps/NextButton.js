const NextButton = ({onClick}) => {

    const handleClick = () => {
        onClick();
    }

    return (
        <button onClick={handleClick}>next</button>
    )
}

export default NextButton;