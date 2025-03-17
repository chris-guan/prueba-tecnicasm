@import "tailwindcss";

Para los estilos de esta aplicación, opté por utilizar CSS Tailwind para reducir cargas de archivos .css externos. Da mas dinamismo al modelo de crear estilos.

// PRUEBA DE POSTMAN: Opté por probar un inicio de sesion apuntando a una base de datos MySQL que yo mismo construi. Esto verifica que el token esté creandose. 

// {
//
//     "message": "Bienvenido",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvcyI6NywiZW1haWwiOiJqYWlyb0Bjb3JyZW8uY29tIiwiaWF0IjoxNzQyMTYwNDMwLCJleHAiOjE3NDIxNjQwMzB9.jhXdCQ_NmQfiEYlfJskUusQpATDZSluu2B8M6B0ivKU"
// }

En El Backend. hice esta impresion para corroborar que el puerto 3000 estuviera escuchando el server.

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

Importaciones importantes en React:

import Express from "express";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";
import cors from "cors";
import authenticateToken from "./middlewares/authenticateToken";
import { Request, Response } from "express";
import mysql from "mysql2/promise";
import { pool } from "./data/db";
import { Routes, Route } from "react-router-dom";









