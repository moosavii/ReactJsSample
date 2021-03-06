import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import ForgetPass from './Pages/ForgetPass';
import NotFound from './Pages/NotFound';
import Companies from './Pages/Companies';
import Error from './Pages/Error';




function AppOut() {
  const [sideBarStatus, setSideBarStatus] = useState(0);

  return (
    <>
        <Routes>
          {/* نام کمپانی قبل از لاگین مهم است 
          بعد از لاگین در توکن است
          */}
          <Route exact path="/" element={<Companies />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/:company/ForgetPass" element={<ForgetPass />} />
          <Route path="/:company/login" element={<Login />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
    </>
  );
}

export default AppOut;
