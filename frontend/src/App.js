import './App.css';
import Header from './component/layout/Header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from 'webfontloader';
import React, { useEffect, useState } from 'react';
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home';
// import Loader from './component/layout/Loader/Loader';
import ProductDetails from './component/product/ProductDetails';
import Products from './component/product/Products';
import Search from './component/product/Search';
import LoginSignUp from './component/User/LoginSignUp';
import store from './store';
import { loadUser } from './actions/userAction';
import UserOptions from './component/layout/Header/UserOptions';
import { useSelector } from 'react-redux';
import Profile from './component/User/Profile';
import ProtectedRoute from './component/Route/ProtectedRoute';
import UpdateProfile from './component/User/UpdateProfile';
import UpdatePassword from './component/User/UpdatePassword';
import ForgotPassword from './component/User/ForgotPassword';
import ResetPassword from './component/User/ResetPassword';
import Cart from "./component/Cart/Cart";
import Shipping from './component/Cart/Shipping';
import ConfirmOrder from './component/Cart/ConfirmOrder';
import axios from 'axios';
import Payment from './component/Cart/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from './component/Cart/OrderSuccess';
import MyOrders from './component/Order/MyOrders';
import OrderDetails from './component/Order/OrderDetails';
import Dashboard from './component/admin/Dashboard';
import ProductList from './component/admin/ProductList';
import NewProduct from './component/admin/NewProduct';
import UpdateProduct from './component/admin/UpdateProduct';
import OrderList from './component/admin/OrderList';
import ProcessOrder from './component/admin/ProcessOrder';
import UsersList from './component/admin/UsersList';
import UpdateUser from './component/admin/UpdateUser';
import ProductReviews from './component/admin/ProductReviews';
import About from './component/layout/About/About';
import Contact from './component/layout/Contact/Contact';
import NotFound from './component/layout/NotFound/NotFound';



function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey , setStripeApiKey] =useState(" ");
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins", "Roboto", "Chilanka", "Abril Fatface", "Dancing Script", "Secular One"],
      },

    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}
      {stripeApiKey && ( <Elements stripe = {loadStripe(stripeApiKey)}>
      <ProtectedRoute exact path="/process/payment" component={Payment} />
      </Elements>)}
      

      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/:keyword" component={Products} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/contact" component={Contact} />

      <Route exact path="/about" component={About} />
      <ProtectedRoute exact path="/account" component={Profile} />
      <Route exact path="/login" component={LoginSignUp} />
      <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
      <ProtectedRoute exact path="/password/update" component={UpdatePassword} />
      <Route exact path="/password/forgot" component={ForgotPassword} />
      <Route exact path="/password/reset/:token/" component={ResetPassword} />
      <Route exact path="/cart" component={Cart} />
      <ProtectedRoute exact path="/shipping" component={Shipping} />
      
     
      

      <ProtectedRoute exact path="/success" component={OrderSuccess} />
      <ProtectedRoute exact path="/orders" component={MyOrders} />

     
      <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />
      <ProtectedRoute exact path="/order/:id" component={OrderDetails} />
     
      
    
      <ProtectedRoute isAdmin = {true} exact path="/admin/dashboard" component={Dashboard} />
      <ProtectedRoute isAdmin = {true} exact path="/admin/products" component={ProductList} />
      <ProtectedRoute isAdmin = {true} exact path="/admin/product" component={NewProduct} />
      <ProtectedRoute isAdmin = {true} exact path="/admin/product/:id" component={UpdateProduct} />
      <ProtectedRoute isAdmin = {true} exact path="/admin/orders" component={OrderList} />
      <ProtectedRoute isAdmin = {true} exact path="/admin/order/:id" component={ProcessOrder} />
      <ProtectedRoute isAdmin = {true} exact path="/admin/users" component={UsersList} />
      <ProtectedRoute isAdmin = {true} exact path="/admin/user/:id" component={UpdateUser} />
      <ProtectedRoute isAdmin = {true} exact path="/admin/reviews" component={ProductReviews} />

      
      <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
     
      </Switch>


     




      <Footer />
    </Router>

  );
}

export default App;
