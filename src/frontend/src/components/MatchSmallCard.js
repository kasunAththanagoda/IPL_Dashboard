import {Link } from 'react-router-dom'

const MatchSmallCard = ({ match, teamName }) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
const otherTeamRoute=`/teams/${otherTeam}`;

  return (
    <div className="MatchSmallCard">
      <Link to={otherTeamRoute}><h3> vs {otherTeam}</h3></Link>
      <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
    </div>
  );
};

export default MatchSmallCard;
