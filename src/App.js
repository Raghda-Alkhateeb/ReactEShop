
import './App.css';
import Nav from './components/Nav';
import {Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Mens from './pages/Mens';
import Wemens from './pages/Wemens';
import Jewelery from './pages/Jewelery';
import Electronics from './pages/Electronics';
import  { CartProvider } from './provider/CartContext';
import ProductDetails from './components/ProductDetails';
import ErorPage from './components/ErorPage';
import { initState, reducer } from './provider/CartReducer';
import Cart from './components/Cart';

// import Home from './pages/Home';

function App() {
  return (
    <CartProvider initState={initState} reducer={reducer}>
  
    <div className="App">
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product/:id' element={<ProductDetails/>}/>
    <Route path='mens' element={<Mens/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='wemens' element={<Wemens/>}/>
    <Route path='jewelery' element={<Jewelery/>}/>
    <Route path='electronics' element={<Electronics/>}/>
    <Route path='*' element={<ErorPage/>}/>
   </Routes>
    </div>
   
    </CartProvider>
  );
}

export default App;
