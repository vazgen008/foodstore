import pizzaImg from "../components/images/pizza.png";
import burgerImg from "../components/images/burger.png";
import cocaImg from "../components/images/coca.png";
import saladImg from "../components/images/salad.png";
import waterImg from "../components/images/water.png";
import iceCreamImg from "../components/images/icecream.png";
import kebabImg from "../components/images/kebab.png";

export function getData() {
  return [
    { title: "Pizza", price: 17.99, image: pizzaImg,id:1 },
    { title: "Burger", price: 15, image: burgerImg,id:2 },
    { title: "Coca", price: 3.5, image: cocaImg ,id:3},
    { title: "Kebab", price: 13.99, image: kebabImg,id:4 },
    { title: "Salad", price: 2.5, image: saladImg,id:5 },
    { title: "Bottle of water", price: 0.99, image: waterImg,id:6 },
    { title: "Ice cream", price: 2.99, image: iceCreamImg,id:7 },
  ];
}