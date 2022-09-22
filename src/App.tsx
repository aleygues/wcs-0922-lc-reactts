import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Wilderfrom from "./components/Wilder";
import { IWilder } from "./interfaces";
import Wilder from "./components/Wilder";
import AddWilderForm from "./components/AddWilderForm";

function App() {
  // My API → give me my wilders!
  const [wilders, setWilders] = useState<IWilder[]>([]);

  const fetch = async (): Promise<void> => {
    const result = await axios.get("http://localhost:5000/api/wilders");
    // process result.data
    console.log(result.data);
    setWilders(result.data);
  };

  useEffect((): void => {
    fetch();
  }, []);

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {wilders.map((wilder) => {
            return (
              <Wilder
                key={wilder.id}
                id={wilder.id}
                name={wilder.name}
                upvotes={wilder.upvotes}
              />
            );
          })}
        </section>
        <AddWilderForm onWilderCreated={() => fetch()} />
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
