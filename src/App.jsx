import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route }  from 'react-router-dom'
const Header =lazy(() => import('./Components/Header/Header'));
const Dashboard = lazy(() => import('./Components/Dashboard/Dashboard'));
const Home =lazy(() => import('./Components/Home/Home'))
 const Login = lazy(() => import ('./Components/Login/Login'));
const Signup = lazy(() => import('./Components/Signup/Signup'));
 const Product = lazy(() => import('./Components/Product/Product'));
 const ProductInfo=lazy(() => import ('./Components/ProductInfo/ProductInfo'));
 const Cart =lazy(() => import('./Components/Cart/Cart'));
 import { CartProvider } from './CartContext';

const App = () => {
  return (
    <BrowserRouter>
    <CartProvider>
    <Header />
    <Suspense fallback={ <h1>Loading the component....</h1> } >
         <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup />} />
             <Route path='/dashboard' element={<Dashboard /> } /> 
            <Route path='*' element={<h1>Page Not found</h1>} /> 
            <Route path='/product' element={<Product />} />
            <Route path='/productInfo/:id' element={<ProductInfo/>}/>
            <Route path='/cart' element={<Cart/>}/>
           
        </Routes>
    </Suspense>
</CartProvider>
    </BrowserRouter>
  )
}

export default App;
