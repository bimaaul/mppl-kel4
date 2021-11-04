import './App.css';
import Cards from './components/ProjekKami/Cards';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <Router>
      <Home />
      <Cards />
    </Router>
  );
}

export default App;
