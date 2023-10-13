

const MatchSmallCard = ({match,teamName}) => {


    return ( 
        <div className="MatchSmallCard">
            <p>{match.team1} vs {match.team2}</p>
            
        </div>
     );
}
 
export default MatchSmallCard;