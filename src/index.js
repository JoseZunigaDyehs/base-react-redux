import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './data/store'
import { firebaseApp } from './firebaseApp'

firebaseApp.auth().onAuthStateChanged(user => {
  if(user){
    console.log('user',user)
  }else{
    console.log('no conexion')
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
