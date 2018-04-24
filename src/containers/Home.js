import React from 'react';
import { firebaseApp } from '../firebaseApp'

const Home = () => {
  return (
    <div>
      <div class="form-group">
        <label>Email address
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
        </label>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label>Password
          <input type="password" class="form-control" id="pass" placeholder="Password" />
        </label>
      </div>
      <button type="submit" class="btn btn-primary" onClick={(e) => login()}>Submit</button>
    </div>
  )
}

const login = () => {
  let email = document.getElementById('email').value;
  let pass = document.getElementById('pass').value;
  debugger
  firebaseApp.auth().createUserWithEmailAndPassword(email, pass)
    .catch(res => {
      console.log(res.message)
    })

}

export default Home;