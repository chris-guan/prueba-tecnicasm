import Login from "./components/Login.tsx"
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx";
import { AuthProvider } from "./components/AuthContext.tsx";
import Register from "./components/Register.tsx";
import NavBar from "./components/NavBar.tsx";
import { Dashboard } from "./components/Dashboard.tsx";


const App: React.FC = () => {

  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
};

export default App
