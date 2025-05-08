import { useState } from 'react';
import TeamSelector from './TeamSelector';
import MatchList from './MatchList';
import Standings from './Standings';
import Stats from './Stats';
import PlayerStats from './PlayerStats';

function App() {
  const [teamId, setTeamId] = useState('133604'); // Milan
  const [leagueId, setLeagueId] = useState('4332'); // Serie A
  const [season, setSeason] = useState('2024-2025');

  return (
    <div className="max-w-4xl mx-auto p-4 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center my-4 text-red-600">Live Milan Tracker</h1>
      <TeamSelector onSelect={setTeamId} />
      <Stats teamId={teamId} />
      <MatchList teamId={teamId} />
      <Standings leagueId={leagueId} season={season} />
      <PlayerStats teamId={teamId} />
    </div>
  );
}

export default App;
