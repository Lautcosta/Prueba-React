import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';


function App() {

  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route exact path='/' element={<ItemListContainer greeting="Saludos Cordiales"/>} />
        
        <Route exact path='/categoria/:idCategoria' element={<ItemListContainer greeting="Saludos Cordiales"/>} />

        <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer/>} />

        <Route exact path='/cart' element={<Cart/>} />
      </Routes>
      
     
      
      
    </BrowserRouter>
  );
}

export default App;
