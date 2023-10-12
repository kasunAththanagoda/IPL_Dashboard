package com.cricket.IPLdashboard.controller;

import com.cricket.IPLdashboard.model.Team;
import com.cricket.IPLdashboard.repository.MatchRepository;
import com.cricket.IPLdashboard.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.awt.print.Pageable;

@RestController
public class TeamController {
//    @Autowired
    private TeamRepository teamRepository;

//    @Autowired
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {
        Team team = this.teamRepository.findByTeamName(teamName);
      //team.setMatches(matchRepository.getByTeam1OrTeam2OrderByDateDesc(teamName,teamName, PageRequest.of(0,4)));
        team.setMatches(matchRepository.findLatestMatchesbyTeam(teamName,4));

        return team;
    }

    

}
