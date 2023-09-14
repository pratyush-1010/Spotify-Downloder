import logo from './logo.svg';
import './App.css';
import './Design.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Comp/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>

    <Home/>
      </Router>

    </div>
  );
}

export default App;
