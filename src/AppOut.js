import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import About from './Pages/About';
import ForgetPass from './Pages/ForgetPass';




function AppOut() {
  const [sideBarStatus, setSideBarStatus] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/ForgetPass" element={<ForgetPass />} />

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppOut;
