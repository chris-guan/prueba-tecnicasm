import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "./AuthContext";

const NavBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/"); // Redirige al inicio al cerrar sesión
    };

    return (
        <nav className="flex p-3 bg-black justify-between text-white items-center">
            <h1 className="text-xl ml-2 font-bold uppercase">
                <Link to="/">Sistema De Control Vehicular</Link>
            </h1>

            <div className="md:hidden p-3">
                <button className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>
            </div>

            <ul
                className={`bg-black items-center md:flex space-x-4 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto md:bg-transparent p-5 md:p-0 transition-transform ${menuOpen ? "block" : "hidden"
                    }`}
            >
                {isAuthenticated ? (
                    <>
                        <li className="hover:bg-gray-800 cursor-pointer text-2xl md:text-base">
                            <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                        </li>

                        <li className="hover:bg-gray-800 cursor-pointer text-2xl md:text-base">
                            <button onClick={handleLogout}>Cerrar Sesión</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="hover:bg-gray-800 cursor-pointer text-2xl md:text-base">
                            <Link to="/register" onClick={() => setMenuOpen(false)}>Registrarse</Link>
                        </li>
                        <li className="hover:bg-gray-800 cursor-pointer text-2xl md:text-base">
                            <Link to="/login" onClick={() => setMenuOpen(false)}>Iniciar Sesión</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;
