import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Saludos Cordiales"/>
    </div>
  );
}

export default App;
