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
import Events from './pages/Events';
import EventsDetail from './pages/EventsDetail';
import Goods from './pages/Goods';
import GoodsDetail from './pages/GoodsDetail';
import Login from './pages/Login';
import Footer from './components/Footer';
import style from './App.module.scss';

function App() {
    return (
        <Router>
            <div className={style.App}>
                <Navbar />

                <main>
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

                        <Route path="/events" element={<Events />} />
                        <Route path="/events/:id" element={<EventsDetail />} />

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
