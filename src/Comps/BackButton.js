const BackButton = ({onClick}) => {

    const handleClick = () => {
        onClick();
    }

    return (
        <button onClick={handleClick}>back</button>
    )
}

export default BackButton;