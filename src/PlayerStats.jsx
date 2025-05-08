import { useEffect, useState } from 'react';

function PlayerStats({ teamId }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/3/lookup_all_players.php?id=${teamId}`)
      .then(res => res.json())
      .then(data => setPlayers(data.player || []));
  }, [teamId]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Giocatori</h2>
      <ul>
        {players.map(player => (
          <li key={player.idPlayer}>
            {player.strPlayer} - {player.strPosition}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerStats;
