import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import ProductList from './components/ProductsList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';
import AddProduct from './components/AddProduct';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import Profil from './components/Profil/Profil';
import CartScreen from './components/Carts/CartScreen';
import DigitalProductList from './components/Digital/DigitalProductList';
import { useSelector } from 'react-redux';


function App() {
  const { user } = useSelector((state) => state.userReducer);
  return (
    <div className="App">
    <Router>
      <Dashboard/>
      {user && user.userRole === "admin" ? <AddProduct /> : null }
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/register" element={<Register />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="/detailProduct/:_id" element={<ProductDetails />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/digital" element={<DigitalProductList />} />
          {/* <Route path='/updateProduct/:_id' element={<UpdateProduct />} /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
