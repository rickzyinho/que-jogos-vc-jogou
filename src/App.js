import React, { useState, useEffect } from "react";
import AddGameForm from "./components/AddGameForm";
import GameList from "./components/GameList";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [games, setGames] = useState([]);

  // Carregar jogos do localStorage quando o componente monta
  useEffect(() => {
    const storedGames = localStorage.getItem("games");
    if (storedGames) {
      setGames(JSON.parse(storedGames)); // Carregar os jogos armazenados
    }
  }, []);

  // Atualizar o localStorage quando a lista de jogos mudar
  useEffect(() => {
    if (games.length > 0) {
      localStorage.setItem("games", JSON.stringify(games));
    }
  }, [games]);

  const addGame = (newGame) => {
    setGames([...games, newGame]);
  };

  const removeGame = (id) => {
    setGames(games.filter((game) => game.id !== id));
  };

  const updateGameStatus = (id, newStatus) => {
    const updatedGames = games.map((game) =>
      game.id === id ? { ...game, status: newStatus } : game
    );
    setGames(updatedGames);
  };

  return (
    <div>
      <Header>Minha Lista de Jogos</Header>
      <main>
        <AddGameForm addGame={addGame} />
        <GameList
          games={games}
          removeGame={removeGame}
          updateGameStatus={updateGameStatus}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
