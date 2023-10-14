import "./App.css";
import MatchPage from "./pages/MatchPage";
import TeamPage from "./pages/TeamPage";
import HomePage from "./pages/HomePage";
// import {BrowserRouter  as Router} from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

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
          <Route
            path="/teams/:teamName/matches/:year"
            element={<MatchPage />}
          />
          <Route path="/teams/:teamName" element={<TeamPage />} />
          <Route exact path="/" element={<HomePage />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
