const Person = (props) => {
    return (
        <div>
            <p>Learn some things about this person!</p>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>{props.over18 ? "You should vote!" : "Sorry, too young to vote" }</p>
            <ul>{props.hobbies.map(h => <li>{h}</li>)}</ul>
        </div>
    )
}