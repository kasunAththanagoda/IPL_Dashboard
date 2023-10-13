import {Link } from 'react-router-dom'

const MatchDetailCard = ({match,teamName}) => {
    
    if(!match) return null;
    const otherTeam=match.team1 === teamName? match.team2:match.team1;
    const otherTeamRoute=`/teams/${otherTeam}`;
    
    return ( 
        <div className="MatchDetailCard">
            <h3>Latest Matches</h3>
            <h4>Match Details</h4>
            <Link to={otherTeamRoute}><h2> vs {otherTeam}</h2></Link>
            <h3>at {match.venue}</h3>
            <h3>{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
        </div>
     );
}
 
export default MatchDetailCard;