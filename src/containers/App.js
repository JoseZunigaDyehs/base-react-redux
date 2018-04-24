import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import '../style.css'
import {connect} from 'react-redux'

import Home from './Home'

const Header = () => {
  return (
    <nav className='w-100 text-center'>
    </nav>
  )
};

const App = (props) => {
  console.log(props.login);
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Route exact path='/' component={Home} />
        {/* <Route path='/idea/:id' component={Idea} /> */}
      </div>
    </Router>
  )
}

const mapStateToProps = (state) => {
  return {
    // login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
