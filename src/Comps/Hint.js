const Hint = () => {
    const handleClick = () => {
        onClick();
    }

    return (
        <button onClick={handleClick}>Need a hint?</button>
    )
}

export default Hint;