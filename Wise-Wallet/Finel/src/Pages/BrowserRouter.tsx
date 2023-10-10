import { Routes, Route } from "react-router-dom";
import InfoPage from "./Overview";
import InfoPage2 from "./Budget";
import Home from "../Pages/Home";
import Login from "../Hooks/LogIn";
import Signup from "../Hooks/SignUp";
import Profile from "../Pages/Profile";
import Salary from "./SalaryForm";
import Chart from "../Components/Chart";
import Overview from "./SalaryPage";

export default function () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/LogIn" element={<Login />}></Route>
        <Route path="/SignUp" element={<Signup />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/InfoPage" element={<InfoPage />}></Route>
        <Route path="/InfoPage2" element={<InfoPage2 />}></Route>
        <Route path="/Overview" element={<Overview />}></Route>
        <Route path="/Salary" element={<Salary />}></Route>
        <Route path="/Chart" element={<Chart />}></Route>
      </Routes>
    </div>
  );
}
