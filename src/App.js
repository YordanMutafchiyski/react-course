import "./App.css";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { checkUserSession } from "./store/user/user.action";
import Authetntication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession())
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home></Home>}></Route>
        <Route path="shop/*" element={<Shop></Shop>}></Route>
        <Route
          path="auth"
          element={<Authetntication></Authetntication>}
        ></Route>
        <Route path="checkout" element={<Checkout></Checkout>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
