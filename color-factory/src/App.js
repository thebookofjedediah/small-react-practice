import {useState} from 'react'
import {Switch, Route, Redirect } from 'react-router-dom';
import ColorsList from './ColorsList';
import Color from './Color';
import ColorForm from './ColorForm';

import './App.css';

let INITIAL_COLORS = {
  red: "red",
  blue: "blue",
  orange: "orange"
}



function App() {
  const [colors, setColors] = useState(INITIAL_COLORS);

  function addColor(newColorObj) {
    setColors(prevColors => ({ ...prevColors, ...newColorObj }));
  }

  function renderCurrentColor(props) {
    const { color } = props.match.params;
    const colorCode = colors[color];
    return <Color {...props} colorCode={colorCode} colorName={color} />;
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/colors">
          <ColorsList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <ColorForm addColor={addColor} />
        </Route>
        <Route path="/colors/:color" render={renderCurrentColor} />
        <Redirect to="/colors" />
      </Switch>
    </div>
  );
}

export default App;
