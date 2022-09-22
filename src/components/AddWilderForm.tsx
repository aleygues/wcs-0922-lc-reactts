import axios from "axios";
import React, { useState } from "react";

interface IProps {
  onWilderCreated: () => void;
}

function AddWilderForm(props: IProps) {
  const [name, setName] = useState("");

  async function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    await axios.post("http://localhost:5000/api/wilders", {
      name: name,
    });
    setName("");
    props.onWilderCreated();
  }

  return (
    <>
      <h2>Ajouter un wilder</h2>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button type="submit" onClick={onSubmit}>
          Ajouter
        </button>
      </form>
    </>
  );
}

export default AddWilderForm;
