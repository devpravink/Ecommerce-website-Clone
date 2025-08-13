
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop'
import SoftCategery from './Pages/SoftCategery';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
      <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Shop/>}/>
              <Route path='/mens' element={<SoftCategery category="men"/>}/>
              <Route path='/womens' element={<SoftCategery category="women"/>}/>
              <Route path='/kids' element={<SoftCategery category="kid"/>}/>
              <Route path="/product"element={<Product/>}>
                <Route path=":productId" element={<Product/>}/>
              </Route>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/login' element={<LoginSignup/>}/>
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App



// src/App.jsx
// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Shop from './Pages/Shop';
// import SoftCategery from './Pages/SoftCategery';
// import Product from './Pages/Product';
// import Cart from './Pages/Cart';
// import LoginSignup from './Pages/LoginSignup';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Shop />} />
//           <Route path="/mens" element={<SoftCategery category="men" />} />
//           <Route path="/womens" element={<SoftCategery category="women" />} />
//           <Route path="/kids" element={<SoftCategery category="kid" />} />
//           <Route path="/product/:productId" element={<Product />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<LoginSignup />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

