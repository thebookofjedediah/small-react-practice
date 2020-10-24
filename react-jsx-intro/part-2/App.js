const App = () => {
    return (
        <div>
            <Tweet username="jarnold" name="Jed Arnold" msg="I use a Macbook" />
            <Tweet username="colt" name="Colt Steele" msg="I love chickens" />
            <Tweet username="realBobRice" name="Bob Rice" msg="This is me, Bob." />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));