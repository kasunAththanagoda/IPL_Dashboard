import { useEffect,useState } from "react";
import { useParams,Link} from 'react-router-dom';
 import  YearSelector  from '../components/YearSelector';

import MatchDetailCard from "../components/MatchDetailCard";
import "./MatchPage.scss"

const MatchPage = () => {
    const [matches, setMatches] = useState([]);
    const { teamName, year } = useParams();
    useEffect(
        () => {
         const fetchMatches = async () => {
             const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`);
            //const response=await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            setMatches(data);

         };
         fetchMatches();
        }, [teamName, year]
    );

   
    return (
        <div >
           <h3 className="home-button"><Link to={'/'} style={{ color: '#25CCF7' }}> {'<< '}Home  </Link></h3>
        <div className="MatchPage">
            <div className="year-selector">
                <h3> Select Year </h3>
                <YearSelector teamName={teamName} />
            </div>

            <div>
                <h1 className="page-heading">{teamName} matches in {year}</h1>
                {
                    matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match} />)
                }
            </div>

        </div>
        </div>
    );
}
 
export default MatchPage;