import React from'react';

import ma from '../images/discount.jpeg'
import mb from '../images/mobiles.jpeg'
import mc from '../images/electronics.jpeg'
import md from '../images/tv.jpeg'
import me from '../images/fashion.jpeg'
import mf from '../images/beauty.jpeg'
import mg from '../images/home.jpeg'
import mh from '../images/fur.jpeg'
import mi from '../images/flight.jpeg'
import mj from '../images/grocery.jpeg'
function Menu(){
    return(
        <>
        <div className='row mt-2 com'>
        <div className='col-md-1 '>
              <br></br>
        </div>
        <div className='col-md-1 '>
            <img src={ma} height={80}/>  
            <p>Top Offers</p>
        </div>
        <div className='col-md-1 '>
            <img src={mb} height={80}/>  
            <p>Mobile </p>
        </div>
        <div className='col-md-1 '>
            <img src={mc} height={80}/>  
            <p>Electronics</p> 
        </div>
        <div className='col-md-1'>
            <img src={md} height={80}/>  
            <p>TVs App</p> 
        </div>
        <div className='col-md-1 '>
        <img src={me} height={80}/>  
            <p>Fashion</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mf} height={80}/>  
            <p>Beauty</p> 
        </div>
        <div className='col-md-1'>
        <img src={mg} height={80}/>  
            <p>Kitchen</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mh} height={80}/>  
            <p>Furniture</p> 
        </div>
        <div className='col-md-1'>
        <img src={mi} height={80}/>  
            <p>Flights</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mj} height={80}/>  
            <p>Grocery</p> 
        </div>
        <div className='col-md-1 '>
              <br></br>
        </div>
    </div>
    </>
        );
    }
    
    
    export default Menu;