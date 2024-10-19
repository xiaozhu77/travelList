import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "charge", quantity: 1, packed: false },
];

export default function App() {
  return (
    <>
      {" "}
      <Logo />
      <Form />
      <PackingList />
      <Stats />
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

function Form() {
  const [description, setDescription] = useState("Text");
  const [quantity, setQuantity] = useState(5);

  return (
    <form
      className="add-form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
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
function Item({ item }) {
  return (
    <li>
      <span style={!item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
      <div className="actions">
        {" "}
        <select>
          <option>sort by input opder</option>
        </select>
        <button></button>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      You have 6 items on your list,and you already packed 0(0%)
    </footer>
  );
}
