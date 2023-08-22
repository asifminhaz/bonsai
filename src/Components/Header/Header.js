import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
       
          <a>Product</a>
          <ul onMouseOver={() => setOpen(true)}
          className="flex items-center  p-2 bg-white border rounded-md" class="p-2 ">
            {/* <li><h1>
            Bonsai Workflow</h1>
            <p>Look professional, win more clients and manage your business from one place</p>
            </li>
            <li><a>Submenu 2</a></li> */}
                <Link to="/bonsaiwork">
  <div class="card w-96">
  <div class="card-body">
    <h2 class="card-title">Bonsai Workflow</h2>
    {/* <p>Look professional, win more clients and manage your business from one place</p> */}
    
  </div>
</div>
    </Link>
    <Link to="/bonsaitax">
    <div class="card w-96">
  <div class="card-body">
    <h2 class="card-title">Bonsai Tax</h2>
    {/* <p>Track expenses maximize tax write-offs and estimate taxes without the headache</p> */}
    
  </div>
</div>
    </Link>
    <Link to="/bonsaicash">
    <div class="card w-96">
  <div class="card-body">
    <h2 class="card-title">Bonsai Cash</h2>
    {/* <p>Bonsai's all-in-one financial hub:No fees and lightning fast payouts</p> */}
    
  </div>
</div>
    </Link>
          </ul>
     
        <li className='mt-2 pricingnav'><Link to="/pricing">Pricing</Link></li>
      <li className='mt-2 reviewsnav'><Link to='/reviews'>Reviews</Link></li>
      <li className='mt-2 aboutnav'><Link to='/about'>About</Link></li>
        
      </ul>
    </div>
    <Link to='/' class="btn btn-ghost normal-case text-xl">bonsai</Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
    
    
        
          <ul class="p-2">
            <li ><a><div class="dropdown">
              <div className='flex '>
  <button  class="dropbtn ">Product </button>
  <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
  </div>
 
  <div class="dropdown-content">
    <Link to="/bonsaiwork">
  <div class="card w-96">
  <div class="card-body">
    <h2 class="card-title">Bonsai Workflow</h2>
    <p>Look professional, win more clients and manage your business from one place</p>
    
  </div>
</div>
    </Link>
    <Link to="/bonsaitax">
    <div class="card w-96">
  <div class="card-body">
    <h2 class="card-title">Bonsai Tax</h2>
    <p>Track expenses maximize tax write-offs and estimate taxes without the headache</p>
    
  </div>
</div>
    </Link>
    <Link to="/bonsaicash">
    <div class="card w-96">
  <div class="card-body">
    <h2 class="card-title">Bonsai Cash</h2>
    <p>Bonsai's all-in-one financial hub:No fees and lightning fast payouts</p>
    
  </div>
</div>
    </Link>
  </div>
  </div>
  </a></li>
          </ul>
       
      
      <li className='mt-2 pricingnav'><Link to="/pricing">Pricing</Link></li>
      <li className='mt-2 reviewsnav'><Link to='/reviews'>Reviews</Link></li>
      <li className='mt-2 aboutnav'><Link to='/about'>About</Link></li>
    </ul>
  </div>
  <div class="navbar-end gap-4">
  <Link to='/login'><button class="btn btn-outline btn-success ">Log in</button></Link>

<Link to='startfree'><button class="btn btn-success">Start Free</button></Link>
  </div>
</div>
        </div>
    );
};

export default Header;