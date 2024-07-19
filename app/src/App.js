import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./user.context";
import MainPage from './MainPage.js'
import Login from './Login.js';
import SignUp from './SignUp.js';
import NavBar from './NavBar';
import PrivateRoute from "./PrivateRoute";

export default function App() {
  return (
    <>
    <div className = 'app'>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route exact path ="/" element={<MainPage />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route exact path="/NavBar" element={<NavBar />} />
          </Route>
        </Routes>
      </UserProvider>
      </BrowserRouter>
    </div>
    </>
  );
}

