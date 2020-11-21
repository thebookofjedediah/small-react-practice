import { BrowserRouter, Route } from 'react-router-dom'
import Vending from './components/Vending'
import Chips from './components/Chips'
import Popcorn from './components/Popcorn'
import Soda from './components/Soda'
import Navbar from './components/Navbar'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Route exact path="/">
          <Vending />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/popcorn">
          <Popcorn />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
