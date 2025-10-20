import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import TopBanner from "@/components/TopBanner";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify';
import Angebot from './pages/Angebot';
import Agb from './pages/legal/Agb';
import CancellationPolicy from './pages/legal/CancellationPolicy';
import CookiePolicy from './pages/legal/CookiePolicy';
import DataProtection from './pages/legal/DataProtection';
import Impressum from './pages/legal/Impressum'


const App = () => {
  return (
    <div className=''>
      <ToastContainer />
      <TopBanner />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/angebot' element={<Angebot />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/agb' element={<Agb />} />
        <Route path='/cancellation-policy' element={<CancellationPolicy />} />
        <Route path='/cookie-policy' element={<CookiePolicy />} />
        <Route path='/data-protection' element={<DataProtection />} />
        <Route path='/impressum' element={<Impressum />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
