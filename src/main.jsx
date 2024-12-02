import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateTrip from './create-trip/CreateTrip.jsx';
import Header from './components/ui/custom/Header.jsx';
import MyTrips from './my-trips/MyTrips.jsx';
import { Toaster } from './components/ui/sonner.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ViewTrip from './view-trip/[tripId]/ViewTrip.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header /> {/* Ensure Header is part of the Router context */}
        <App />
      </>
    ),
  },
  {
    path: '/create-trip',
    element: (
      <>
        <Header />
        <CreateTrip />
      </>
    ),
  },
  {
    path: '/view-trip/:tripId',
    element: (
      <>
        <Header />
        <ViewTrip />
      </>
    ),
  },
  {
    path: '/my-trips',
    element: (
      <>
        <Header />
        <MyTrips />
      </>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <RouterProvider router={router} />
      <Toaster />
    </GoogleOAuthProvider>
  </StrictMode>
);
