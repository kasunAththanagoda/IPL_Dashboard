import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";

const TeamPage = () => {
    return ( 
        <div className="TeamPage">
            <h1>Team Page</h1>
            <MatchDetailCard></MatchDetailCard>
            <MatchSmallCard></MatchSmallCard>
            <MatchSmallCard></MatchSmallCard>
            <MatchSmallCard></MatchSmallCard>
            <MatchSmallCard></MatchSmallCard>

        </div>
     );
}
 
export default TeamPage;