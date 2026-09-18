import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastProvider } from "./context/ToastContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { RecentlyViewedProvider } from "./context/RecentlyViewedContext";
import { OrdersProvider } from "./context/OrdersContext";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import SearchResults from "./pages/SearchResults";
import Offers from "./pages/Offers";
import ProductDetails from "./pages/ProductDetails";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import MyOrders from "./pages/MyOrders";
import OrderDetails from "./pages/OrderDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DeliveryInfo from "./pages/DeliveryInfo";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

function AppProviders({ children }) {
  return (
    <ToastProvider>
      <CartProvider>
        <WishlistProvider>
          <RecentlyViewedProvider>
            <OrdersProvider>{children}</OrdersProvider>
          </RecentlyViewedProvider>
        </WishlistProvider>
      </CartProvider>
    </ToastProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/product/:slug" element={<ProductDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/orders/:orderId" element={<OrderDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/delivery-info" element={<DeliveryInfo />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AppProviders>
    </BrowserRouter>
  );
}

export default App;
