import React, { useEffect, useState } from "react";
import axios from "axios";

const PopularPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get("https://api.example.com/popular-players");
        setPlayers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div>
      <h2>Popular Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <h3>{player.name}</h3>
            <p>Team: {player.team}</p>
            <p>Position: {player.position}</p>
            <p>Country: {player.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPlayers;
