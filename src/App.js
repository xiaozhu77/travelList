import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "charge", quantity: 1, packed: false },
];

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
  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
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

function Logo() {
  return (
    <header>
      <h1>🌴far away 🍶</h1>
    </header>
  );
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("Text");
  const [quantity, setQuantity] = useState(5);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    console.log(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What are you need for your 😍 trip</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, x) => x + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
function Item({ item, handleDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item}
        onChange={() => onToggleItem(item.id)}
      ></input>
      <span style={!item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function PackingList({ items, handleDeleteItem, handleToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select>
          <option>sort by input opder</option>
        </select>
        <button>submit</button>
      </div>
    </div>
  );
}

function Stats({ items }) {
  if (!items.length)
    return (
      <div className="stats">
        <em>Start adding some items to your packing list 🚖</em>
      </div>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {" "}
        {percentage === 100
          ? "You got everything! let's go ✈"
          : `You have ${numItems}items on your list,and you already packed ${percentage}%`}
      </em>
    </footer>
  );
}
