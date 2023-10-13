import {Link} from 'react-router-dom';

import "./YearSelector.scss";

const YearSelector = ({teamName}) => {
    const years=[];
    const startYear=process.env.REACT_APP_DATA_START_YEAR;
    const endYear=process.env.REACT_APP_DATA_END_YEAR;
console.log("abc:",startYear,endYear);
    for(let i=startYear;i<=endYear;i++){
        years.push(i);
        console.log(i)
    }

    return ( 
        <ol className='YearSelector'>
            {years.map(year=>
                <li key={year}>
                <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
            </li>
            )}
        </ol>
     );
}
 
export default YearSelector;