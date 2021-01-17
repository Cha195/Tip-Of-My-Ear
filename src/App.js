import './App.css';
import Genre from './Components/Genre';
import Board from './Components/Board'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Genre} />
        <Route path="/board/:genre" render={props => <Board {...props}/>} />
      </Switch>
    </Router>
  );
}

export default App;
