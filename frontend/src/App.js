import './App.css';
import Header from './component/layout/Header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from 'webfontloader';
import React from 'react';
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home';
import Loader from './component/layout/Loader/Loader';
import ProductDetails from './component/product/ProductDetails';
import Products from './component/product/Products';
import Search from './component/product/Search';



function App() {

  React.useEffect(()=>{
    WebFont.load({
      google:{
        families: ["Poppins","Roboto","Chilanka","Abril Fatface","Dancing Script","Secular One"],
      },
      
    });
  }, []);
  return (
   <Router>
    <Header/>
   
    <Route exact path="/" component={Home} />
    <Route exact path="/product/:id" component={ProductDetails} />
    <Route exact path="/products" component={Products} />
    <Route path="/products/:keyword" component={Products} />
    <Route exact path="/search" component={Search} />
   
   
 
    
    
    <Footer/>
   </Router>
   
  );
}

export default App;