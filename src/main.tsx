import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Suspense } from 'react';
import './index.css'
import { Landing } from './pages';
import { Loader } from './components';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Loader />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
