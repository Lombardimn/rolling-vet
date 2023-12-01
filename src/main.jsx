import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import App from './App.jsx'
import React from 'react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <App />
  </Provider>
)
