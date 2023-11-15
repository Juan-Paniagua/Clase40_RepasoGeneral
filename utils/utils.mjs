import fs from "node:fs"

const readData = () => {
    const jsonData = fs.readFileSync("./database/database.JSON");
    const pizzas = JSON.parse(jsonData)
    return pizzas
};

const writeData = () => {

};

console.log (readData());

export {readData, writeData} 