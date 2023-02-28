import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import MainLayout from "./layout/MainLayout";
import Coin from "./pages/Coin/Coin";
import CoinAddressMaster from "./pages/CoinAddress/CoinAddressMaster";
import UserMaster from "./pages/UserMaster/UserMaster";
import Settings from "./pages/Settings/Settingss";
import LogIn from "./pages/Login/LogIn";
import Home from "./Home";
import Protected from "./Protected";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="/home" element={<Protected Component={Home} />} />

            <Route path="/coin" element={<Protected Component={Coin} />} />
            <Route
              path="/transaction"
              element={<Protected Component={CoinAddressMaster} />}
            />
            <Route
              path="/users"
              element={<Protected Component={UserMaster} />}
            />
            <Route
              path="/settings"
              element={<Protected Component={Settings} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
