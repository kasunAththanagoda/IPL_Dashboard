import { useEffect,useState } from "react";

import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";

const TeamPage = () => {
    const[team,setTeam]=useState({});

    useEffect(
        ()=>{
            const fetchMatches=async ()=>{
                const response=await fetch('http://localhost:8080/team/Rajasthan Royals');
                const data= await response.json();
                console.log("fetched data : ",data);
                setTeam(data);           
             };
            fetchMatches();
        },[]
    );

    if(!team.matches) return null;
    return ( 
        <div className="TeamPage">
            <h1>{team.teamName}</h1>
            <MatchDetailCard match={team.matches[0]}></MatchDetailCard>
            {team.matches.slice(1).map(match=> <MatchSmallCard match={match}></MatchSmallCard>)}

        </div>
     );
}
 
export default TeamPage;