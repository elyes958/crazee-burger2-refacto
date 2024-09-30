import Login from "./components/pages/login/Login";
import {BrowserRouter, Routes, Route, Link,} from "react-router-dom";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="OrderPage/:userId" element={<OrderPage/>} />
      <Route path="*"  element={<ErrorPage/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
