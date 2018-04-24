import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDHnasUM5dqyJCSAcg4fZg8nUR6BkFqqyA",
  authDomain: "habitantes-4f8e6.firebaseapp.com",
  databaseURL: "https://habitantes-4f8e6.firebaseio.com",
  projectId: "habitantes-4f8e6",
  storageBucket: "habitantes-4f8e6.appspot.com",
  messagingSenderId: "630509775784"
}

export const firebaseApp = firebase.initializeApp(config)