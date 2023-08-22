import React from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/Firebase.init';

import { Link } from 'react-router-dom';
const Login = () => {
    const auth = getAuth(app);
    // const provider = new GoogleAuthProvider()

const handleLogIn = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password)
     .then(result  => {
        const loggedUser = result.user;
        console.log(loggedUser)
     })
     .catch(error => {
        console.error(error)
     })
}

    

    return (
        <div>
           <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogIn}>
      <div  class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" class="input input-bordered"  required/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" class="input input-bordered" required />
         
        </div>
        <div class="form-control mt-6">
          <button  class="btn btn-success">Login</button>
        </div>

      </div>
      </form>
      <Link to="/startfree"><button  class="btn btn-link">New to Bonsai? Please Register</button></Link>

    </div>
  </div>
</div>
        </div>
    );
};

export default Login;