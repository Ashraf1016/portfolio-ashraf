import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import "./App.css";
import Contact from "./components/contact";
import { New } from "./components/New";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
AOS.init();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<New />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/new" element={<New />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </BrowserRouter>
  );
}
