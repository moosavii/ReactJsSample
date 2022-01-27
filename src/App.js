import './App.css';
import Login from './Login';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider } from '@mui/material';
import CustomTheme from './Asset/CustomTheme';




const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});






function App() {
  return (
    <div dir="rtl">
      "only god helps"
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={CustomTheme}>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}

export default App;
