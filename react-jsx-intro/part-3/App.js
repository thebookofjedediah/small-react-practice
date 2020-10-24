const App = () => {
    return (
        <div>
            <Person name="Jed Arnold" age="26" over18 hobbies={["Spikeball/Roundnet", "Coding", "Woodworking"]} />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));