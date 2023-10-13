import { useEffect,useState } from "react";
import { useParams,Link } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';

import './TeamPage.scss';

import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";

const TeamPage = () => {
    const[team,setTeam]=useState({});
    const { teamName } = useParams();

    useEffect(
        
        ()=>{
            if(teamName){console.log("team : ",teamName);
            const fetchMatches=async ()=>{
                const response=await fetch(`http://localhost:8080/team/${teamName}`);
                const data= await response.json();
                console.log("fetched data : ",data);
                setTeam(data);           
             };
            fetchMatches();}
        },[teamName]
    );

    if(!team || !team.teamName) {
        return <h1>Team Not Found</h1>;
    }
    return ( 
        <div className="TeamPage">
            <div className="team-name-section">
            <h1 className="team-name">{team.teamName}</h1>
            </div>
            <div className="win-loss-section">Wins / Losses
            <PieChart
                data={[
                    { title: 'Losses', value: team.totalMatches - team.totalWins, color: '#ff7675' },
                    { title: 'Wins', value: team.totalWins, color: '#00b894' },
                ]}
                />
            
            </div>
            <div className="match-detail-section">
            <h3>Latest Matches</h3>
            <MatchDetailCard teamName={team.teamName} match={team.matches[0]}></MatchDetailCard>
            </div>
            {team.matches.slice(1).map((match)=> <MatchSmallCard key={match.id} teamName={team.teamName} match={match}></MatchSmallCard>)}

            <div className="more-link">
            <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More ></Link>
            </div>
        </div>
     );
}
 
export default TeamPage;