import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const items = useSelector((state) => state.cart);

  useEffect(() => {
    const sendCartData = async () => {
      const res = await fetch(
        "https://redux-http-c16ee-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(items),
        }
      );
      const data = await res.json();
    };
    sendCartData()
  }, [items]);

  return <div className="App">{isLoggedIn ? <Layout /> : <Auth />}</div>;
}

export default App;
