import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import './index.css'
import App from './pages/home/App'
import TopNavBar from './components/header/Header';
import MobileNav from './components/mobile_nav/MobileNav';
import { Suspense } from 'react';
import Loader from './components/loader/Loader';
import Events from './pages/events/Events';
import Workshops from './pages/workshops/Workshops';
import GuestLectures from './pages/guestLectures/GuestLectures';
import Accomodation from './pages/accomodation/Accomodation';
import ContactUs from './pages/contactus/ContactUs';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <TopNavBar />
        <MobileNav />
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/workshops" element={<Workshops/>} />
          <Route path="/guest-lectures" element={<GuestLectures/>} />
          <Route path="/accommodation" element={<Accomodation/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="*" element={<Loader />} />
        </Routes>
        {/* <Footer /> */}
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
