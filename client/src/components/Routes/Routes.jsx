import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import Coffeeform from "../Coffeeform/Coffeeform";

const AppRoutes = () => {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={ user ? <Coffeeform /> : <Navigate to="/login" />  }/>
      <Route path="/login" element ={!user ? <Login/> :  <Navigate to="/" /> }/>
      <Route path="/signup" element ={!user ? <Signup/> :  <Navigate to="/" /> }/>
      <Route path="*" element={<h1>Error 404: Page not found!</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
