import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';       // latest
import AppV1 from './v1/AppV1.jsx'; // v1
import AppV2 from './v2/AppV2.jsx'; // v2
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />       {/* Latest version */}
        <Route path="/v1/*" element={<AppV1 />} /> {/* v1 */}
        <Route path="/v2/*" element={<AppV2 />} /> {/* v2 */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
