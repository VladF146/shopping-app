import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const products = [
    {
      id: "ps5-1",
      name: "Playstation 5",
      price: 499,
    },
    {
      id: "ps5-2",
      name: "PS5 Controller",
      price: 69,
    },
    { id: "ps5-3", name: "60 TV Fernsehen", price: 899 },
  ];

  const [lists, setLists] = useState([]);
  const [idList, setIdList] = useState([]);

  function addToList(item) {
    if (idList.includes(item.id)) {
      setLists([
        ...lists.map((e) => {
          if (e.id === item.id) {
            e.amount = e.amount + 1;
            return e;
          } else {
            return e;
          }
        }),
      ]);
    } else {
      setLists([...lists, { ...item, amount: 1 }]);
      setIdList([...idList, item.id]);
    }
  }

  function removeItem(item) {
    const tempList = lists.map((e) => {
      if (e.id === item.id) {
        e.amount = e.amount - 1;
        return e;
      } else {
        return e;
      }
    });

    setLists([
      ...tempList.filter((e) => {
        if (e.amount > 0) {
          return true;
        } else {
          setIdList([...idList.filter((e) => e !== item.id)]);
          return false;
        }
      }),
    ]);
  }

  function deleteItem(item) {
    setLists([...lists.filter((e) => e.id !== item.id)]);
    setIdList([...idList.filter((e) => e !== item.id)]);
  }

  function addItem(item) {
    const tempList = lists.map((e) => {
      if (e.id === item.id) {
        e.amount = e.amount + 1;
        return e;
      } else {
        return e;
      }
    });
    setLists([...tempList.filter((e) => e.amount > 0)]);
  }

  return (
    <div className={styles.container}>
      <div>
        <p>test1</p>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}€</p>
            <button key={product.id} onClick={() => addToList(product)}>
              Add to card
            </button>
          </div>
        ))}
      </div>

      <div>
        <h2>Warenkorb</h2>
        {lists.map((element) => (
          <div key={element.id}>
            <p>{element.name}</p>
            {element.price}
            <button onClick={() => removeItem(element)}>-</button>
            {element.amount}
            <button onClick={() => addItem(element)}>+</button>
            <button onClick={() => deleteItem(element)}>Delete</button>
          </div>
        ))}
      </div>
      <p>
        {`Sum: ${lists.reduce((a, b) => {
          return a + b.amount * b.price;
        }, 0)} €`}
        {JSON.stringify(lists)}
        <br></br>
        {JSON.stringify(idList)}
      </p>
    </div>
  );
}
