import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const products = [ {
    id: "ps5-1", 
    name: "Playstation 5", 
    price: 499 }, { 
       id: "ps5-2" ,
       name: "PS5 Controller", 
       price: 69 }, 
       {id: "ps5-3",
       name: "60 TV Fernsehen",
       price: 899
       } 
   ]
   const [lists, setLists] = useState([]);
   const [sum, setSum] = useState(0);

   function addToList(item){
    setLists([...lists, item]);
    setSum(sum + item.price);
   }

  return (
    <div className={styles.container}>
        <div >
          <p>test1</p>
          {products.map((product) => 
            <div key={product.id}>
              <p>{product.name}</p>
              <p>{product.price}€</p>
              <button key={product.id} onClick={() => addToList(product)}>add to card</button>
            </div>
          )}
        </div>

        <div >
          <h2>Warenkorb</h2>
          { lists.map((element) =>
          <div key={element.id}>          
            <p>{element.name}</p>
            {element.price}
            </div>
          )}
          <p>Summe: {sum}€</p>
        </div>
    </div>
  )
}
