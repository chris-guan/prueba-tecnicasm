import Image1 from "../images/imageCar.jpeg";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
    return (

        <header id="home"
            className="min-h-screen flex justify-center items-center bg-gradient-to-r from-black via-gray-800 to-black bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.69), rgba(77, 24, 24, 0.45)), url(${Image1})` }}
        >


            <div className="flex flex-col items-center text-center text-white">
                <h2 className="p-4 text-4xl  md:text-6xl font-extrabold">Bienvenidos a {''} <span className="text-green-400">Sistema de Control Vehicular</span></h2>
                <p className="p-10 text-gray-100 text-lg italic space-y-5 ">Para disfrutar de nuestros servicios de monitoreo. Puedes dar clic en el siguiente boton para registrarte.</p>
                <p className="p-1 text-white text-lg italic space-y-5 font-bold">Consideraciones importantes:</p>
                <p className="p-1 text-white text-lg italic space-y-5 font-bold ">Sistema de Logueo: Funciona el registro e inicio de sesion. Se implementó una base de datos MySql y se conectó por API logrando logueo por token.</p>
                <p className="p-1 text-white text-lg italic space-y-5 font-bold">Información de Vehiculo: La información sobre los datos del vehiculo está estatica. En proceso de desarrollo.</p>
                <br />
                <button className="bg-green-700 px-4 py-2 rounded hover:bg-green-900 cursor-pointer"><Link to="/register">Regístrate Ahora</Link></button>
            </div>
        </header>
    )
}

export default Header