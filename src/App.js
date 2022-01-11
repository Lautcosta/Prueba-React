import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/useState/ItemCount.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';





function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Saludos Cordiales"/>
     {/*  <ItemCount min={1} max={10}/> */}
      <ItemDetailContainer/>
      
    </div>
  );
}

export default App;
