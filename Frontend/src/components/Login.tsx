import { useState } from "react";
import Image2 from "../images/login.jpeg";
import { useNavigate } from "react-router-dom";


const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert(`Bienvenido ${email}`);
                localStorage.setItem('token', data.token);
                navigate('/dashboard');

            } else {
                alert(data.error || "Error al iniciar sesion.");
            }
        } catch (err) {
            console.error('Error al conectar con el servidor:', err);
            setMensaje('Error al conectar con el servidor.');
        }
    };

    return (
        <>
            <section className="p-5 h-screen bg-cover bg-center from-black via-gray-800 to-black" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.81), rgba(20, 34, 9, 0.29)), url(${Image2})` }}>
                <h1 className="p-5 text-3xl text-center text-white font-extrabold">Ingresa tu correo y clave.</h1>
                <div className="flex flex-col md:flex-row items-center md:items-start lg:justify-center lg:space-x-10">
                    <div className="bg-gray-200 w-[400px] h-[420px] rounded-lg text-black p-5 my-5 mx-auto md:mx-0 text-center shadow-lg overflow-hidden">
                        <h1 className="p-5 text-3xl font-bold">Iniciar Sesion</h1>
                        <em className="p-3 font-bold text-green-500">Sistema De Control Vehicular</em>

                        <form onSubmit={handleLogin}
                            className="p-3 bg-gray-200 text-black "
                        >
                            <div className="mb-4">
                                <label className="block text-semibold">Correo:</label>
                                <input type="email"
                                    className="w-full p-2 rounded bg-white text-black"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-semibold">Contraseña:</label>
                                <input type="password"
                                    className="w-full p-2 rounded bg-white text-black"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <a href="#"><p className="italic hover:text-blue-800">Olvidaste tu contraseña?</p></a>
                            </div>
                            <div className="mb-4">
                                <button className="bg-green-700 text-white mt-10 px-4 rounded py-2 hover:bg-green-900 cursor-pointer">Ingresar</button>
                                {mensaje && <p className="text-red-500">{mensaje}</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login
