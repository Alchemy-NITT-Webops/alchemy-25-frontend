import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './pages/home/App'
import TopNavBar from './components/header/Header';
import MobileNav from './components/mobile_nav/MobileNav';
import Footer from './components/footer/footer';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/something",
    element: <div>something</div>,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <TopNavBar/>
    <MobileNav/>
    <RouterProvider router={router}/>
    <Footer/>
  </StrictMode>,
)
