import { useState,useEffect } from 'react';
import './App.css';
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Cart from './components/Cart/Cart';
const {getData} = require("./db/db")
const tele = window.Telegram.WebApp
function App() {
  const foods = getData()
  const [cartItems,setcartItems] = useState([])
  useEffect(()=>{
    tele.ready()
  },[])
  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setcartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setcartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };
  const onRemove = (food)=>{
    const exist = cartItems.find((x) => x.id === food.id);
    if(exist.quantity == 1){
      setcartItems(cartItems.filter((x)=>x.id!==food.id))
    }else{
      setcartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  }
  const onCheckOut = ()=>{
    tele.MainButton.text = 'Pay'
    tele.MainButton.show()
  }
  return (
    <>
      <h1 className='heading'>Order Food</h1>
      <Cart cartItems={cartItems} onCheckOut={onCheckOut}/>
      <div className='cards__container'>
      {foods.map(food=>{
        return(
          <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove}/>
        )
      })}
      </div>
    </>
  );
}

export default App;
