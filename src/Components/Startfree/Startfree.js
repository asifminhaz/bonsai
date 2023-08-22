import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useContext, useRef, useState } from 'react';
import app from '../../Firebase/Firebase.init';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
const auth = getAuth(app);

 
const Startfree = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
  
  const handleRegister = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password)
    createUserWithEmailAndPassword(auth, name, email, password)
    .then(result  => {
       const loggedUser = result.user;
       console.log(loggedUser)
    })
    .catch(error => {
       console.error(error)
    })
 
  }
  const handleEmail = (event) => {
setEmail(event.target.value)
  }
  const handleName = (event) => {
    setName(event.target.value)
  }
  const handlePassword = (event) => {
setPassword(event.target.value)
  }
    return (
        
        <div>
          
                <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">   
      <form onSubmit={handleRegister} class="card-body">
      <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input onChange={handleName}  type="text" name='name' placeholder="name" class="input input-bordered"  required/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input onChange={handleEmail}  type="email" name='email' placeholder="email" class="input input-bordered"  required/>
        </div>  
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input onChange={handlePassword}  type="password" name='password' placeholder="password" class="input input-bordered" required />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Reset Password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button   class="btn btn-success">Register</button>
        </div>
      </form>
      
      <Link to="/login"><button class="btn btn-link">Already have an account? Please Log In</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Startfree;