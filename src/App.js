import Login from "./components/pages/login/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="OrderPage/:username" element={<OrderPage/>} />
      <Route path="*"  element={<ErrorPage/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
