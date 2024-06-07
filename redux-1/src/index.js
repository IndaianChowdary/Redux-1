import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let storeData = {
  fighters: [],
  chopers: [],
  boeings: [],
};

let reducer = (updatedStoredData = storeData, dispatchedObj) => {
  console.log("inside reducer");
  console.log(dispatchedObj);

  if (dispatchedObj.type === "addFighters") {
    return { ...updatedStoredData, fighters: updatedStoredData.fighters.concat([dispatchedObj.data]) };
  } else if (dispatchedObj.type === "addChopers") {
    return { ...updatedStoredData, chopers: updatedStoredData.chopers.concat([dispatchedObj.data]) };
  } else if (dispatchedObj.type === "addBoeings") {
    return { ...updatedStoredData, boeings: updatedStoredData.boeings.concat([dispatchedObj.data]) };
  }

  return updatedStoredData;
};

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
