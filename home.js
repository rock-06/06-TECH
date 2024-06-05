import React from 'react'
import Navbar from '../component/navbar';
import Service from './service';
import Footer from './footer';

function home() {
  return (
    <div>   /* The main container div for the Home component */

      <Navbar /> /* Render the Navbar component at the top of the page */
      <br/>
      <br/>
        <Service />  /* Render the Service component, which displays the services or products */
       
    </div>
   
    
  )
}

export default home
