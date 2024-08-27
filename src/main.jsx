import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./stores";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AuthProvider>
  </StrictMode>
);
