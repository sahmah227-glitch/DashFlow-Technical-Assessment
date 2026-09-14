import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Items } from "./pages/Items";
import { Sales } from "./pages/Sales";
import { Register } from "./pages/Register";
import { PrivateRoute } from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import{ Contact } from "./pages/Contact";
import { SearchTxt } from "./pages/SearchTxt";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchTxt />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/items"
            element={
              <PrivateRoute>
                <Items />
              </PrivateRoute>
            }
          />
          <Route
            path="/sales"
            element={
              <PrivateRoute>
                <Sales />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
