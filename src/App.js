import Logo from "./Logo";
import { useState } from "react";
import Form from "./Form";
import PackingList from "./List";
import Stats from "./stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "charge", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItem] = useState([]);
  function handleAddItems(newItem) {
    setItem(() => [...items, newItem]);
  }
  function handleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteList() {
    setItem([]);
  }
  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
        onDeleteList={handleDeleteList}
      />
      <Stats items={items} />
    </>

    // <div className="app">
    //   <header>
    //     <h1>far away</h1>
    //   </header>

    //   <div className="add-form">
    //     <h3></h3>
    //   </div>

    //   <div className="list"></div>

    //   <footer className="stats"></footer>
    // </div>
  );
}
