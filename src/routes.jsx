import { Routes, Route } from "react-router-dom";
import Home from "./assets/Home/Home.js";
import Jack from "./assets/Jack/Jack.js";

export const WebRoutes = () => {
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/jack" element={<Jack />} />
    {/* <Route path="/admin/*" element={<Home />} /> */}
    {/* <Route path="/home" element="User template" />
    <Route path="/" element="Login Template" />
    <Route path="/register" element="Register Template" /> */}
  </Routes>;
};
