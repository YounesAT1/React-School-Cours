import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { Provider } from "react-redux";
/// import store from "./redux/WhatsApp/store";
// import store from "./redux/Tasks/store";
// import store from "./redux/CRUD/store";
// import { store } from "./redux/Social/store";
// import { store } from "./V2_AIT-TALB_YOUNES/redux/store";
import { Provider } from "react-redux";
import { store } from "./V1_AIT-TALB_YOUNES/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
