-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-03-2025 a las 08:06:27
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vehiculosdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_usuarios`
--

CREATE TABLE `tb_usuarios` (
  `id_usuarios` int(11) NOT NULL,
  `nombre_usuario` varchar(255) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tb_usuarios`
--

INSERT INTO `tb_usuarios` (`id_usuarios`, `nombre_usuario`, `email`, `password`) VALUES
(1, 'ChristianGuan', 'chris@correo.com', '12345*'),
(2, 'JuanDes', 'juan@correo.com', '34321*'),
(3, 'CarlosAlbert', 'carlos@correo.com', '$2b$15$Tm6UkOcd4KLw0/u6bG7kteCTvLmD1qZIev/XDRK1M4LjpLjnoWhPi'),
(4, 'JoseBar', 'jose@correo.com', '$2b$15$GJoJEJIb4ebbmQbL7kDUtuOethPyyGOrOxAsXR8bwmdmWtIv8gpfG'),
(5, 'AndreaMar', 'andrea@correo.com', '$2b$15$TssY6/0babpNQ5jUqioOZuMeLo7OUJUmJ37vKsYWaR.dqz9HaGWXK'),
(6, 'ManuelGuille', 'manu@correo.com', '$2b$15$Jw47CbhOZE59jYfGUyoGuureP0n3h3b8Z.pc6p55VQTbMJazuTr3q'),
(7, 'JairoC', 'jairo@correo.com', '$2b$15$y08YLx2VB9Q08Vlt6etmZeCsRcQBKy1kbSFzgkzo3sgoY5A7m9OnC'),
(8, 'CamiloGuantiva', 'camiguan@correo.com', '$2b$15$RXX6kzRGagJ.MK7.18SYEesRavAFjb02/cVBnwhMODTYfVJdXHEhy');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_vehiculos`
--

CREATE TABLE `tb_vehiculos` (
  `id_vehiculo` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `marca` varchar(100) DEFAULT NULL,
  `ubicacion` varchar(255) DEFAULT NULL,
  `nivel_conbustible` varchar(50) DEFAULT NULL,
  `Temperatura` varchar(50) DEFAULT NULL,
  `kilometraje` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tb_vehiculos`
--

INSERT INTO `tb_vehiculos` (`id_vehiculo`, `id_usuario`, `marca`, `ubicacion`, `nivel_conbustible`, `Temperatura`, `kilometraje`) VALUES
(1, 1, 'Mazda 3', 'https://maps.app.goo.gl/Dkm9xTJKTe6qxjez6', '20', '37', 23457),
(2, 7, 'Chevrolet', 'https://maps.app.goo.gl/Dkm9xTJKTe6qxjez6', '20', '37', 35698);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tb_usuarios`
--
ALTER TABLE `tb_usuarios`
  ADD PRIMARY KEY (`id_usuarios`);

--
-- Indices de la tabla `tb_vehiculos`
--
ALTER TABLE `tb_vehiculos`
  ADD PRIMARY KEY (`id_vehiculo`),
  ADD KEY `fk_usuario_vehiculos` (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tb_usuarios`
--
ALTER TABLE `tb_usuarios`
  MODIFY `id_usuarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `tb_vehiculos`
--
ALTER TABLE `tb_vehiculos`
  MODIFY `id_vehiculo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tb_vehiculos`
--
ALTER TABLE `tb_vehiculos`
  ADD CONSTRAINT `fk_usuario_vehiculos` FOREIGN KEY (`id_usuario`) REFERENCES `tb_usuarios` (`id_usuarios`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
