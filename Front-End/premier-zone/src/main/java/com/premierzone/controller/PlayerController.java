package com.premierzone.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.premierzone.service.PlayerService;
import com.premierzone.Player;
import com.premierzone.PlayerFilter;

@RestController
@RequestMapping(path = "premier-zone/api/")
@CrossOrigin(origins = "http://localhost:5173")
public class PlayerController {

    private final PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping("players")
    public List<Player> getAllPlayers() {
        return playerService.getAllPlayers();
    }

    @GetMapping("player/{id}")
    public Player getPlayerById(@PathVariable("id") int id) {
        return playerService.getPlayerById(id);
    }
    
    @GetMapping("playersbynaem/{name}")
    public List<Player> getPlayerByName(@PathVariable("name") String name) {
        return playerService.getPlayersByName(name);
    }

    @GetMapping("playersbyteam/{team}")
    public List<Player> getPlayerByTeam(@PathVariable("team") String team) {
        return playerService.getPlayersByTeam(team);
    }

    @GetMapping("playerbyage/{age}")
    public List<Player> getPlayerByAge(@PathVariable("age") int age) {
        return playerService.getPlayersByAge(age);
    }

    @GetMapping("playersbynation/{nation}")
    public List<Player> getPlayerByNation(@PathVariable("nation") String nation) {
        return playerService.getPlayersByNation(nation);
    }

    @GetMapping("playersbypostion/{postion}")
    public List<Player> getPlayerByPostion(@PathVariable("postion") String postion) {
        return playerService.getPlayersByPostion(postion);
    }

    @GetMapping("players/search")
    public List<Player> search(PlayerFilter filter) {
        return playerService.search(filter);
    }
}
