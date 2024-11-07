import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './create-trip/CreateTrip.jsx'
import Header from './components/ui/custom/Header.jsx'
import MyTrips from './my-trips/MyTrips.jsx'
import { Toaster } from './components/ui/sonner.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ViewTrip from './view-trip/[tripId]/ViewTrip.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>
  },
  {
    path: '/create-trip',
    element:<CreateTrip/>
  },
  {
    path: '/view-trip/:tripId',//!dynamic route
    element: <ViewTrip />
  },
  {
    path: '/my-trip',
    element: <MyTrips />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Header />
      <Toaster/>
      <RouterProvider router={router} />

    </GoogleOAuthProvider>

    {/* <App /> */}
  </StrictMode>,
)
