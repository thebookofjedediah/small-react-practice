const Tweet = (props) => {
    return (
        <div>
            <h3>{props.username} <span>{props.name}</span></h3>
            <p>{props.msg}</p>
        </div>
    )
}