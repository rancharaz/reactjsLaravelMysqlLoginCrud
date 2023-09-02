 import './App.css';
import './Sass/_style.scss'
import Header from './components/UI/Header';
import { Routes, Route } from 'react-router-dom';
import AddProduct from './components/Pages/AddProduct';
import UpdateProduct from './components/Pages/UpdateProduct';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import PrivateComponent from './components/PrivateComponent/PrivateComponent';
import ProductList from './components/Pages/ProductList';
import SearchProduct from './components/Pages/SearchProduct';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<PrivateComponent />} > {/* protected routes if login */}
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/update-product/:id" element={<UpdateProduct />} /> {/* get by id */}
        <Route path="/" element={<ProductList />} />
        <Route path="/search-product" element={<SearchProduct />} />
        </Route>
        {/* if not login/register */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
