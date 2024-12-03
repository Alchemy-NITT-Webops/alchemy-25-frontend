import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './pages/home/App'
import MobileNav from './components/mobile_nav/MobileNav';
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
    <MobileNav/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
