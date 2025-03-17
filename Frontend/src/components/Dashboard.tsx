import { useEffect } from "react";
import ImageTac from "../images/imageTac.jpg"
import { useNavigate } from "react-router-dom";
// import { useVehiculos } from "../hooks/useVehiculos";



export const Dashboard = () => {

    const navigate = useNavigate();
    // const { data: products, isLoading, error } = useVehiculos();

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message} </div>;
    // if (!products) return <div>No Albums found...</div>

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // cuando no hay token devuelve a la pagina de inicio
        }
    }, [navigate]);

    // useEffect(() => {
    //     const fetchVehiculos = async () => {
    //         try {
    //             const token = localStorage.getItem('token'); // Obtén el token almacenado
    //             const response = await fetch('http://localhost:3000/api/vehiculo', {
    //                 method: 'GET',
    //                 headers: {
    //                     Authorization: `Bearer ${token}`, // Agrega el token a la cabecera
    //                 },
    //             });

    //             if (!response.ok) {
    //                 throw new Error('Error al obtener los libros');
    //             }

    //             const data = await response.json();
    //             setVehiculos(data); // Actualiza el estado con los vehiculos
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Error al cargar los libros:', error);
    //             setLoading(false);
    //         }
    //     };

    //     fetchVehiculos();
    // }, []);

    // if (loading) {
    //     return <p>Cargando libros...</p>;
    // }

    // if (vehiculos.length === 0) {
    //     return <p>No se encontraron libros.</p>;
    // }

    return (
        <>
            <section className="w-screen min-h-screen bg-cover bg-center from-black via-gray-800 to-black bg-black" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.81), rgba(20, 34, 9, 0.29)), url(${ImageTac})` }}>
                <h1 className="p-5 text-3xl text-center text-white font-extrabold">Hola, Esta es la información de tu vehiculo.</h1>
                <em className="flex p-3 text-lg text-white justify-center text-center">Los datos son estaticos hasta el momento. Esta es una muestra de Frontend.</em>
                <div className="w-screen min-h-screen grid grid-cols-1 md:grid-cols-3 items-center md:items-start lg:justify-center lg:space-x-10">
                    <div className="rounded-lg text-white p-5 my-5 mx-auto md:mx-0 text-center shadow-lg overflow-hidden">
                        <h1 className="p-5 text-3xl font-bold">Marca</h1>
                        <p className="p-3 bg-gray-800 rounded-2xl text-4xl font-bold text-green-500">Mazda 3</p>

                    </div>
                    <div className="rounded-lg text-white p-5 my-5 mx-auto md:mx-0 text-center shadow-lg overflow-hidden">
                        <h1 className="p-5 text-3xl font-bold">Ubicación</h1>
                        <div className="p-3 rounded-2xl justify-center items-center text-center font-bold bg-amber-50"><iframe className="w-[390px] h-[200px]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497.10322911913534!2d-74.0892803!3d4.6251428!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9962d2f8911f%3A0x1eae62ab311e1b1b!2sCra.%2032c%20%2323-2%20a%2023-40%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1742185793393!5m2!1ses!2sco" width="600" height="450" loading="lazy"></iframe></div>

                    </div>
                    <div className="rounded-lg text-white p-5 my-5 mx-auto md:mx-0 text-center shadow-lg overflow-hidden">
                        <h1 className="p-5 text-3xl font-bold">Temperatura</h1>
                        <p className="p-3 bg-gray-800 rounded-2xl text-4xl font-bold text-green-500">37°</p>

                    </div>
                    <div className="rounded-lg text-white p-5 my-5 mx-auto md:mx-0 text-center shadow-lg overflow-hidden">
                        <h1 className="p-5 text-3xl font-bold">Nivel de Combustible</h1>
                        <p className="p-3 bg-gray-800 rounded-2xl text-4xl font-bold text-orange-500">20%</p>

                    </div>
                    <div className="rounded-lg text-white p-5 my-5 mx-auto md:mx-0 text-center shadow-lg overflow-hidden">
                        <h1 className="p-5 text-3xl font-bold">Kilometraje</h1>
                        <p className="p-3 bg-gray-800 rounded-2xl text-4xl font-bold text-green-500">35698</p>

                    </div>

                </div>
            </section>
        </>
    );
};