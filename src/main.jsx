import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layout/RootLayout';
import Home from './page/home/Home';
import Timeline from './page/timeline/Timeline';
import Stats from './page/stats/Stats';
import NotFoundPage from './page/notFoundPage/NotFoundPage';
import { FriendsProvider } from './context/FriendContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children:[

      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/timeline',
        element:<Timeline/>
      },
      {
        path:'/stats',
        element:<Stats/>
      }
    ],
    errorElement: <NotFoundPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsProvider>
      <RouterProvider router={router} />
    </FriendsProvider>
  </StrictMode>

)
