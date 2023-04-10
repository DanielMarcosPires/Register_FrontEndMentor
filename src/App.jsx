import "./color/style.scss";
import { BrowserRouter as RouterProvider, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header";
import ErrorPage from "./pages/Error";
import Register from "./pages/register";
import RegisterEnviado from "./pages/register/RegisterEnviado";
function App() {
  return (
    <div className="App">
    <RouterProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />}/>
        <Route path="register/enviado" element={<RegisterEnviado />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </RouterProvider>
    </div>
  );
}

export default App;
