import React, { useState } from "react";

const AddGameForm = ({ addGame }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Jogando");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      addGame({
        id: Date.now(),
        name,
        status,
      });
      setName("");
      setStatus("Jogando");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do Jogo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      ></input>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value={"Jogando"}>Jogando</option>
        <option value={"Finalizado"}>Finalizado</option>
        <option value={"Abandonado"}>Abandonado</option>
      </select>
      <button type="submit">Adicionar Jogo</button>
    </form>
  );
};

export default AddGameForm;
