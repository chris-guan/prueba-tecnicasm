import Express from "express";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";
import cors from "cors";
import authenticateToken from "./middlewares/authenticateToken";
import { Request, Response } from "express";
import mysql from "mysql2/promise";
import { pool } from "./data/db";

dotenv.config();
const app = Express();
app.use(Express.json());
const port = 3000;

app.use(cors({
    origin: 'http://localhost:5173', // Permite solicitudes desde el frontend
}));

export async function getData(query: string) {
    const [rows] = await pool.query(query);
    return rows;
}

app.get('/', (req, res) => {
    res.send('App de datos prueba.');
});



app.get('/api/data', async (req, res) => {
    try {
        console.log('Procesando...');
        const data = await getData('SELECT * FROM tb_usuarios');
        console.log('Datos:', data);
        res.status(200).json(data);
    } catch (err) {
        console.error('Error al obtener datos:', err);
        res.status(500).send('Error al obtener datos');

    }
});

app.post('/api/register', async (req, res) => {
    const { nombre_usuario, email, password } = req.body;
    try {
        const hashedPass = await bcrypt.hash(password, 15); // 15: cantidad del cifrado
        await pool.query('INSERT INTO tb_usuarios (nombre_usuario, email, password) values (?, ?, ?)',
            [nombre_usuario, email, hashedPass]);

        res.status(201).json({ message: 'El usuario ha sido creado con éxito.' });
    } catch (err) {
        console.error('Error al registrar usuario:', err);
        res.status(500).send('Error al registrar usuario');
    }
});


app.post('/api/login', async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        const [rows]: any = await pool.query('SELECT * FROM tb_usuarios WHERE email = ?', [email]);

        if (rows.length === 0) {
            res.status(404).json({ error: "El Usuario no fue encontrado." });
        }

        const user = rows[0];

        const isValidPass = await bcrypt.compare(password, user.password);

        if (!isValidPass) {
            res.status(401).json({ error: "Contraseña incorrecta. Valide de nuevo" });
        }

        const token = jsonwebtoken.sign(
            { id_usuarios: user.id_usuarios, email: user.email },
            process.env.JWT_SECRET || '107ebc5473e69c13e913ffce3ebe8d35a5fd266a8ab2504d4c58cb0e8f7c282212304a78bd1c8cc5bb73ecd157f07ddb38a2ef13799ea506e3633a32cce17b79' as string,
            { expiresIn: '1h' }
        );

        res.status(200).json({ message: "Bienvenido", token });
    } catch (err) {
        console.error("Error en el inicio de sesión:", err);
        res.status(500).json({ error: "Error en el inicio de sesión" });
    }
});

interface AuthenticatedRequest extends Request {
    user: {
        id_usuarios: number;
    };
}
app.get('/api/vehiculo', authenticateToken, async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {

        const userId = req.user.id_usuarios;

        const [result]: any = await pool.query("SELECT * FROM tb_vehiculos WHERE id_usuario = ?", [userId]);

        if (!result.length) {
            res.status(404).json({ error: 'No Se Encontraron Vehiculos De Este Usuario' });
        }

        res.status(200).json(result); // Devuelve los libros al cliente
    } catch (error) {
        console.error('Error al obtener informacion:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});



// PRUEBA DE POSTMAN

// {
//
//     "message": "Bienvenido",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvcyI6NywiZW1haWwiOiJqYWlyb0Bjb3JyZW8uY29tIiwiaWF0IjoxNzQyMTYwNDMwLCJleHAiOjE3NDIxNjQwMzB9.jhXdCQ_NmQfiEYlfJskUusQpATDZSluu2B8M6B0ivKU"
// }



app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

