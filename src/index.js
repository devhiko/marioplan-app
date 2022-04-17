// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { applyMiddleware, createStore } from 'redux';
import { createFirestoreInstance, getFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';
import App from './App';
import firebaseConfig from './config/firebaseConfig';
import './index.css';
import rootReducer from './store/reducers/rootReducer';

const rrfConfig = {
  userProfile: 'users'
}

firebase.initializeApp(firebaseConfig)

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>
);

