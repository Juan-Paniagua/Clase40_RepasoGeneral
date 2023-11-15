import net from "node:net"
import dotenv from "dotenv"
import { Socket } from "node:dgram";
dotenv.config();

const port = process.env.PORT;

const serverTCP = net.createServer();

console.log("hola");

serverTCP.listen(port, () => {
    console.log("Servidor en escucha por puerto ", port)
});

serverTCP.on("connection", (socket) => {
    socket.on("data") 
    console.log ("El cliente me mando un mensaje uwu")
});