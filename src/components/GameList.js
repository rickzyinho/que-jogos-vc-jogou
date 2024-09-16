import React from "react";

const GameList = ({ games, removeGame, updateGameStatus }) => {
  return (
    <div>
      {games.lenght === 0 ? (
        <p>Nenhum jogo adicionado ainda.</p>
      ) : (
        games.map((game) => (
          <div key={game.id}>
            <strong>{game.name}</strong>
            <p>Status: {game.status}</p>
            <select
              value={game.status}
              onChange={(e) => updateGameStatus(game.id, e.target.value)}
            >
              <option value={"Jogando"}>Jogando</option>
              <option value={"Finalizado"}>Finalizado</option>
              <option value={"Abandonado"}>Abandonado</option>
            </select>
            <button onClick={() => removeGame(game.id)}>Remover</button>
          </div>
        ))
      )}
    </div>
  );
};

export default GameList;
