import { useState } from 'react';

function TeamSelector({ onSelect }) {
  const [teamName, setTeamName] = useState('');

  const handleSearch = () => {
    fetch(`https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${teamName}`)
      .then(res => res.json())
      .then(data => {
        if (data.teams && data.teams.length > 0) {
          onSelect(data.teams[0].idTeam);
        } else {
          alert('Squadra non trovata');
        }
      });
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={teamName}
        onChange={e => setTeamName(e.target.value)}
        placeholder="Inserisci nome squadra"
        className="border p-2 mr-2 text-black"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">Cerca</button>
    </div>
  );
}

export default TeamSelector;
