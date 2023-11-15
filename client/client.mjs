import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

const options = {
    port: process.env.PORT,
    host: process.env.HOST,
}

const clientTCP = net.createConnection(options)

clientTCP.on("connect", () => {
    console.log("Me conecte a un servidor uwu")
})