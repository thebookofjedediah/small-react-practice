const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent />
        </div>
    )
}

ReactDOM.render(<App/>,
    document.getElementById("root"));