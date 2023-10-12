package com.cricket.IPLdashboard.repository;

import com.cricket.IPLdashboard.model.Match;


import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public interface MatchRepository extends CrudRepository<Match, Long> {
    //List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName, String teamName1, PageRequest of);
//    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName, String teamName1, Pageable PageRequest of);
    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1, String teamName2, PageRequest of);

    //
//    //can do this on the controller.but doing so increases dependenct
//    //though we can't implement methods on interfaces.we can do it by using default
    default List<Match> findLatestMatchesbyTeam(String teamName, int count) {
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, count));
    }
}
