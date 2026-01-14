package com.premierzone.service;

import java.util.List;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.premierzone.Player;
import com.premierzone.PlayerFilter;
import com.premierzone.PlayerNotFoundException;
import com.premierzone.PlayerSpecification;
import com.premierzone.repository.PlayerRepository;

@Service
public class PlayerService {

    private final PlayerRepository playerRepo;

    public PlayerService (PlayerRepository playerRepo) {
        this.playerRepo = playerRepo;
    }
    
    public Player getPlayerById(int id) {
        return playerRepo.findById(id).orElseThrow(() -> new PlayerNotFoundException(id));
    }

    public List<Player> getAllPlayers() {
        return playerRepo.findAll();
    }

    public List<Player> getPlayersByAge(int age){
        return playerRepo.findByAge(age);
    }

    public List<Player> getPlayersByTeam(String searchTeam) {
        return playerRepo.findByTeamIgnoreCase(searchTeam);
    }

    public List<Player> getPlayersByPostion(String searchPostion){
        return playerRepo.findByPostionContainsIgnoreCase(searchPostion);
    }

    public List<Player> getPlayersByName(String searchName) {
        return playerRepo.findByNameContainsIgnoreCase(searchName);
    }

    public List<Player> getPlayersByNation(String searchNation) {
        return playerRepo.findByNationContainsIgnoreCase(searchNation);
    }

    public List<Player> getPlayersByTeamAndAge(String searchTeam, int searchAge){
        return playerRepo.findByTeamContainsIgnoreCaseAndAge(searchTeam, searchAge);
    }

    public List<Player> getPlayersByTeamAndAgeGreaterThan(String searchTeam, int searchAge){
        return playerRepo.findByTeamContainsIgnoreCaseAndAgeGreaterThan(searchTeam, searchAge);
    }

    public List<Player> getPlayersByTeamAndAgeLessThan(String searchTeam, int searchAge){
        return playerRepo.findByTeamContainsIgnoreCaseAndAgeLessThan(searchTeam, searchAge);
    }

    public List<Player> getPlayersByNationAndPostionAndAge(String searchNation, String searchPostion, int searchAge) {
        return playerRepo.findByNationContainsIgnoreCaseAndPostionContainsIgnoreCaseAndAge(searchNation, searchPostion, searchAge);
    }

    public List<Player> getPlayersByNationAndPostionAndAgeGreaterThan (String searchNation, String searchPostion, int searchAge) {
        return playerRepo.findByNationContainsIgnoreCaseAndPostionContainsIgnoreCaseAndAgeGreaterThan(searchNation, searchPostion, searchAge);
    }

    public List<Player> getPlayersByNationAndPostionAndAgeLessThan (String searchNation, String searchPostion, int searchAge) {
        return playerRepo.findByNationContainsIgnoreCaseAndPostionContainsIgnoreCaseAndAgeLessThan(searchNation, searchPostion, searchAge);
    }

    public List<Player> search(PlayerFilter filter) {
        Specification<Player> spec;
        spec = Specification.allOf(
            PlayerSpecification.hasNation(filter.getNation()),
            PlayerSpecification.hasName(filter.getName()),
            PlayerSpecification.hasTeam(filter.getTeam()),
            PlayerSpecification.ageBtween(filter.getMaxAge(), filter.getMinAge())
        );
        return playerRepo.findAll(spec);
    }
}