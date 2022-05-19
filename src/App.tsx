import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alert from './components/Alert';
import { AlertProvider } from './contexts/AlertContext';
import { AuthProvider } from './contexts/AuthContext';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn'
import Checkout from './Pages/Checkout';
import MainPage from './components/MainPage/MainPage';
import Main from './Pages/Main';
import Clinic from './Pages/Clinic';
import PaymentInfo from './Pages/PaymentInfo';

function App() {
  const theme = createTheme({
    palette: {
      secondary: { main: "#424445" },
      background: { default: "#FFFFFF", paper: "#FAFAFA" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AlertProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="app" element={<MainPage />}>
                <Route path="/app/checkout" element={<Checkout />} />
                <Route path= "/app/main" element={<Main />} />
                <Route path="/app/clinic" element={<Clinic />}/>
                <Route path="/app/payment" element={<PaymentInfo />}/>
              </Route>
            </Routes>
          </BrowserRouter>
          <Alert />
        </AuthProvider>
      </AlertProvider>
    </ThemeProvider>
  );
}

export default App;
