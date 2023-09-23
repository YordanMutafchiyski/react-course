import "./App.css";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

import Authetntication from "./routes/authentication/authentication.component";

const Shop = ()=>{
  return <h1>I am the shop page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="shop" element={<Shop></Shop>}></Route>
        <Route path="auth" element={<Authetntication></Authetntication>}></Route>    
      </Route>
    </Routes> 
  );
  
    
};

export default App;
