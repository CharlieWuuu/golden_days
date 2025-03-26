import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Orders from './pages/Orders';
import OrderDetail from './pages/OrderDetail';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Experiences from './pages/Experiences';
import ExperienceDetail from './pages/ExperienceDetail';
import Goods from './pages/Goods';
import GoodsDetail from './pages/GoodsDetail';
import Login from './pages/Login';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />

                <main style={{ flexGrow: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />

                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/payment" element={<Payment />} />

                        <Route path="/orders" element={<Orders />} />
                        <Route path="/orders/:id" element={<OrderDetail />} />

                        <Route path="/articles" element={<Articles />} />
                        <Route path="/articles/:id" element={<ArticleDetail />} />

                        <Route path="/experiences" element={<Experiences />} />
                        <Route path="/experiences/:id" element={<ExperienceDetail />} />

                        <Route path="/goods" element={<Goods />} />
                        <Route path="/goods/:id" element={<GoodsDetail />} />

                        <Route path="/account/login" element={<Login />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
