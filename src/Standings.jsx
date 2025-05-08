import { useEffect, useState } from 'react';

function Standings({ leagueId, season }) {
  const [table, setTable] = useState([]);

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=${leagueId}&s=${season}`)
      .then(res => res.json())
      .then(data => setTable(data.table || []));
  }, [leagueId, season]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Classifica Serie A</h2>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Squadra</th>
            <th>Punti</th>
            <th>G</th>
            <th>V</th>
            <th>N</th>
            <th>P</th>
          </tr>
        </thead>
        <tbody>
          {table.map(team => (
            <tr key={team.teamid}>
              <td>{team.intRank}</td>
              <td>{team.name}</td>
              <td>{team.intPoints}</td>
              <td>{team.intPlayed}</td>
              <td>{team.intWin}</td>
              <td>{team.intDraw}</td>
              <td>{team.intLoss}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Standings;
