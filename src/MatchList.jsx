import { useEffect, useState } from 'react';

function MatchList({ teamId }) {
  const [lastMatches, setLastMatches] = useState([]);
  const [nextMatches, setNextMatches] = useState([]);

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=${teamId}`)
      .then(res => res.json())
      .then(data => setLastMatches(data.results || []));

    fetch(`https://www.thesportsdb.com/api/v1/json/3/eventsnext.php?id=${teamId}`)
      .then(res => res.json())
      .then(data => setNextMatches(data.events || []));
  }, [teamId]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Ultime Partite</h2>
      <ul className="mb-4">
        {lastMatches.map(match => (
          <li key={match.idEvent}>
            {match.dateEvent} - {match.strEvent} ({match.intHomeScore} - {match.intAwayScore})
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-bold mb-2">Prossime Partite</h2>
      <ul>
        {nextMatches.map(match => (
          <li key={match.idEvent}>
            {match.dateEvent} - {match.strEvent}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MatchList;
