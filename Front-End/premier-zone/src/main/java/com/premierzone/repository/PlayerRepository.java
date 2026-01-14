package com.premierzone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.premierzone.Player;
import java.util.List;


public interface PlayerRepository extends JpaRepository<Player, Integer>
, JpaSpecificationExecutor<Player> {  

    List<Player> findByTeamIgnoreCase(String team);
    List<Player> findByAge(int age);
    List<Player> findByPostionContainsIgnoreCase(String pos);
    List<Player> findByNationContainsIgnoreCase(String nation);
    List<Player> findByNameContainsIgnoreCase(String name);
    List<Player> findByTeamContainsIgnoreCaseAndAge(String team, int age);
    List<Player> findByTeamContainsIgnoreCaseAndAgeGreaterThan(String team, int age);
    List<Player> findByTeamContainsIgnoreCaseAndAgeLessThan(String team, int age);
    List<Player> findByNationContainsIgnoreCaseAndPostionContainsIgnoreCaseAndAge(String nation, String postion, int age);
    List<Player> findByNationContainsIgnoreCaseAndPostionContainsIgnoreCaseAndAgeGreaterThan(String nation, String postion, int age);
    List<Player> findByNationContainsIgnoreCaseAndPostionContainsIgnoreCaseAndAgeLessThan(String nation, String postion, int age);
}
