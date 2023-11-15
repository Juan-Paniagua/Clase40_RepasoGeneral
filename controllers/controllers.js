// getters -> Funciones que toman datos de la DB
// setters -> Funciones que modifican la DB
import {readData, writeData} from "../utils/utils.mjs"

const getPizzas = () => {
    const pizzas = readData();
    return pizzas
}

const getPizzabyID = (id) => {
    const pizzas = readData();
    const pizza = pizzas.find((pizza) => pizza.name === id)
    return pizza
}

const addPizza = (newpizza) => {
    const pizzas = readData()
    const pizzaChecker = pizzas.find((pizza) => pizza.name === newpizza.name);
    if (pizzaChecker){
        return "Ya esta este sabor"
    } else {
        pizzas.push(newpizza);
        writeData(JSON.stringify(pizzas))
        return "Pizza agregada con exito";
    }
}

const deletePizzaByID = (id) => {
    const pizzas = readData()
    const pizzaChecker = pizzas.find((pizza) => pizza.name === newpizza.name)
    
    if (pizzaChecker) {
        const nuevasPizzas = pizzas.filter(pizza => pizza.id !== id);
        writeData(JSON.stringify(nuevasPizzas))
    return "Pizza borrada con exito :c"
} else {
    return "La pizza indicada no existe"
}}

export {getPizzas, getPizzabyID, addPizza, deletePizzaByID}