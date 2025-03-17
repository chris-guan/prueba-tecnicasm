import { useState } from "react"
import { Link } from "react-router-dom";
import Image3 from "../images/register.jpg"

const Register: React.FC = () => {
    const [nombre_usuario, setNombre_usuario] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPass) {
            alert('La contraseña no coincide. Por favor validar nuevamente');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ nombre_usuario, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Felicidades. El usuario ha sido creado con éxito. Ya puedes Iniciar Sesión");
                setNombre_usuario('');
                setEmail('');
                setPassword('');
                setConfirmPass('');
            } else {
                setMensaje(data.message);
            }
        } catch (err) {
            console.error('Error al procesar la solicitud:', err);
            setMensaje('Hubo un error al procesar la solicitud');
        }
    };

    return (
        <>
            <section className="p-5 min-h-screen bg-cover bg-center from-black via-gray-800 to-black" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.81), rgba(20, 34, 9, 0.29)), url(${Image3})` }}>

                <div className="flex-col justify-center items-center text-center min-h-screen">

                    <h1 className="p-5 text-3xl text-white text-center font-extrabold">Registrate a {''} <span className="text-green-500">Sistema de Control Vehicular</span> con tu nombre y correo electronico.</h1>
                    <div className="flex flex-col items-center md:items-center lg:justify-center lg:space-x-10">
                        <div className="bg-gray-200 w-[400px] h-[600px] rounded-lg text-black p-5 my-5 mx-auto md:mx-0 text-center shadow-lg overflow-hidden">
                            <h1 className="p-5 text-3xl font-bold">Crear Cuenta</h1>
                            <form
                                className="bg-gray-200 text-black"
                                onSubmit={handleRegister}
                            >
                                <div className="mb-4">
                                    <label className="block text-semibold">Nombre:</label>
                                    <input type="text"
                                        className="w-full p-2 rounded bg-white text-black"
                                        value={nombre_usuario}
                                        onChange={(e) => setNombre_usuario(e.target.value)}
                                        required />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-semibold">Correo:</label>
                                    <input
                                        type="email"
                                        className="w-full p-2 rounded bg-white text-black"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-semibold">Contraseña:</label>
                                    <input type="password"
                                        className="w-full p-2 rounded bg-white text-black"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-semibold">Confirmar Contraseña:</label>
                                    <input type="password"
                                        className="w-full p-2 rounded bg-white text-black"
                                        value={confirmPass}
                                        onChange={(e) => setConfirmPass(e.target.value)}
                                        required />
                                </div>
                                <div className="mb-4">
                                    <button type="submit"
                                        className="bg-green-700 text-white mt-10 px-4 rounded py-2 hover:bg-green-900 cursor-pointer">Crear Usuario
                                    </button>
                                    <div className="my-5">
                                        ¿Ya estas registrado? <a className="text-green-700" href="#login"><Link to="/login">Inicia Sesión</Link></a>
                                    </div>
                                    {mensaje && <p className="text-green-700">{mensaje}</p>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register
