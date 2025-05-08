import { useEffect, useState } from 'react';

function Stats({ teamId }) {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupteam.php?id=${teamId}`)
      .then(res => res.json())
      .then(data => setTeam(data.teams ? data.teams[0] : null));
  }, [teamId]);

  if (!team) return <div>Caricamento...</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{team.strTeam}</h2>
      <p><strong>Stadio:</strong> {team.strStadium}</p>
      <p><strong>Capacità:</strong> {team.intStadiumCapacity}</p>
      <p><strong>Descrizione:</strong> {team.strDescriptionIT || team.strDescriptionEN}</p>
    </div>
  );
}

export default Stats;
