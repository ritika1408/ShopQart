import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './Header.css'
import Badge from '@mui/material/Badge';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MetaData from '../MetaData';

const Header = () => {
  const history = useHistory();
  const [keyword, setKeyword] = useState(" ");
  const searchSubmitHandler = (e)=>{
      e.preventDefault();
      //trim is to remove spaces
      if(keyword.trim()){
          history.push(`/products/${keyword}`);


      }
      else{ history.push("/products");
  }
  };
  return (

    <header>  
    <div class="logo"> 
    <NavLink to="/" className="logo__icon">
    <h1><span className='letter'>S</span>hop
    <span className = 'letter'>Q</span>art</h1>
   </NavLink>
   </div>  
    <div class="search">  
    <form action="/" className="item__search" onSubmit={searchSubmitHandler}>
   
						<input
							type="text"
							placeholder="Search a Product ..."
							onChange={(e) => setKeyword(e.target.value)}
             
						/>
            
						<input type="submit" value="Search" />
					
    {/* <input type="text" placeholder='Search your Product here..' className='input__search' /> */}
    
   
    </form>
            
      </div>  
        <div class="heading">  
          <ul>  
         <li> <NavLink to="/" className="Links"> Home </NavLink>  </li>
						<li> <NavLink to="/Products" className="Links">  Products</NavLink></li>
						<li> <NavLink to="/about" className="Links">About</NavLink></li>
						<li> <NavLink to="/contact" className="Links"> Contact</NavLink></li>
						<li> <NavLink to="/login" className="Links"> <AccountCircleIcon/></NavLink></li> 
          </ul>  
        </div>  
     </header>
    
   
  )
}

export default Header;

//  <>

// <nav className='nav-header'>
//      1st div for logo 
//         <NavLink to="/" className="logo__icon">

// 				<div className="logo">
// 						<h1><span className='letter'>S</span>hop
//              <span className = 'letter'>Q</span>art</h1>
//            </div>
// 			</NavLink> 

//         2nd part 
//           <div className="search__box">
//           <form className="item__search">
// 		 				<input 
// 					type="text"
// 		 					placeholder="Search a Product ..."
//              />
//              <SearchIcon className="header__searchIcon" /> 
// 					<input type="submit" placeholder="Search" /> 
// 		 			</form>

//       </div> 

//          3rd part
//           <div className="menu-link">
//             <ul>
//            <li> <NavLink to="/" className="Links"> Home </NavLink>  </li>
// 				 		<li> <NavLink to="/Products" className="Links">  Products</NavLink></li>
// 				 		<li> <NavLink to="/about" className="Links">about</NavLink></li>
// 				 		<li> <NavLink to="/contact" className="Links"> Contact</NavLink></li>
// 				 		<li> <NavLink to="/login" className="Links"> <LoginIcon /></NavLink></li>
// 		 				 <li> <NavLink to="/cart" className="Links">
//            <Badge badgeContent={cartItems.length} color ="warning">

// 		 						<ShoppingCartIcon />
// 		 					</Badge>
// 			</NavLink></li> 
//     </ul>
//        </div>
       

//        </nav>
//       </>  
