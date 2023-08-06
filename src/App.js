import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import Home from "./components/Pages/Home";

import DealersHome from "./components/Dealers/DealersHome";
import Admin from "./components/Admin/Admin";
import Models from "./components/Pages/Models";
import Login from "./components/Registration/Login";
import RegisterUser from "./components/Registration/RegisterUser";
import RegisterAdmin from "./components/Registration/RegisterAdmin";
import RegisterDealer from "./components/Registration/RegisterDealer";
import DealersPortal from "./components/Dealers/DealersPortal";
import LoginDealer from "./components/Dealers/LoginDealer";
import AdminLogin from "./components/Admin/AdminLogin";
import MDetails from "./components/Pages/MDetails";
import Company from "./components/Pages/company";
import WithSubnavigation from "./components/navbar";
import Booking from "./components/Pages/Booking";
import About from "./components/About";
import ModelsList from "./components/Pages/ModelsList";
import Protected from "./Protected";
import LargeWithLogoCentered from "./components/Footer";
function App() {
  const [data, setData] = useState();
  const handleData = (v) => {
    setData(v);
  };

  return (
    <div>
      <WithSubnavigation />
      <Routes>
        <Route path='/' element={<Home fetch={handleData} />} />
        <Route path='/companies' element={<Company />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<About />} />
        <Route path='/models' element={<Models dataId={data} />} />
        <Route path='/models/Details' element={<MDetails />} />
        <Route path='/models/Details/creditCard' element={<Booking />} />
        <Route path='/registerUser' element={<RegisterUser />} />

        <Route path='/dealerHome' element={<DealersHome />} />
        <Route path='/dealerHome/registerDealer' element={<RegisterDealer />} />
        <Route
          path='/dealerHome/registerDealer/loginDealer'
          element={<LoginDealer />}
        />
        <Route
          path='/dealersPortal'
          element={<Protected Component={DealersPortal} />}
        />
        <Route path='/ModelList' element={<ModelsList />} />
        <Route path='/registerAdmin' element={<RegisterAdmin />} />
        <Route path='/registerAdmin/loginAdmin' element={<AdminLogin />} />
        <Route path='/admin' element={<Protected Component={Admin} />} />
        <Route path='*' element={<NoPage></NoPage>} />
      </Routes>
      <LargeWithLogoCentered />
    </div>
  );
}

export default App;
