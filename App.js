import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './component/home';  // Home component
import Cart from './component/cart';
import Footer from './component/footer';
function App() {
  return (
    <Router>  /* Wrap the application in Router to enable routing */
      <div>
      <Home />  /* Render the Home component at the top of every page */
      
        <Routes> /* Define the Routes that the application can navigate to */
       
          <Route path="/home" exact component={Home} /> /* Route to Home component when the path is "/home" */
          
          <Route path="/Cart" component={Cart} /> /* Route to Cart component when the path is "/Cart" */
        </Routes>
        <Footer/>  /* Render the Footer component at the bottom of every page */
      </div>
    </Router>
  );
}

export default App;
