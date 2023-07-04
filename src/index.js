import React, { createContext, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store  from './redux/store'
import './index.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store}><App /></Provider>);


//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(
//<React.StrictMode>
//    <Provider store={store}>
//        <Appredux />
 //       </Provider>
  //  </React.StrictMode>
  //  );