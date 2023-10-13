import './App.css';
import TeamPage from './pages/TeamPage';
// import {BrowserRouter  as Router} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <Router  path="/teams">
        <h1>sdsdds</h1>
      </Router>
      <Router  path="/teamsd/:teamName">
        <TeamPage></TeamPage>
      </Router> */}
      
      <Router>
      <Routes>
        {/* <Route path="/" exact element={<h1>sadsdads </h1>}/> */}
        <Route path="/teams/:teamName" element={<TeamPage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
