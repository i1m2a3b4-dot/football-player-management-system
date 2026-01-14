package com.premierzone;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "player_state")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String team;
    private String nation;
    private String postion;
    private int age;
    private int mp;
    private int stsrt;
    private double min;
    private double gls;
    private double ast;
    private double pk;
    private double crdy;
    private double crdr;
    private double xg;
    private double xag;

    public Player() {

    }

    public Player(int id, String name, String nation, String postion, String team, int age, int mp, int stsrt, double min, double gls, double ast, double pk, double crdy, double crdr, double xg, double xag) {
        this.name = name;
        this.nation = nation;
        this.postion = postion;
        this.team = team;
        this.age = age;
        this.mp = mp;
        this.stsrt = stsrt;
        this.min = min;
        this.gls = gls;
        this.ast = ast;
        this.pk = pk;
        this.crdy = crdy;
        this.crdr = crdr;
        this.xg = xg;
        this.xag = xag;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age >= 15 && age <= 60) {
            this.age = age;
        }
    }

    public double getAst() {
        return ast;
    }

    public void setAst(double ast) {
        this.ast = ast;
    }

    public double getCrdr() {
        return crdr;
    }

    public void setCrdr(double crdr) {
        this.crdr = crdr;
    }

    public double getCrdy() {
        return crdy;
    }

    public void setCrdy(double crdy) {
        this.crdy = crdy;
    }

    public double getGls() {
        return gls;
    }

    public void setGls(double gls) {
        this.gls = gls;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getMin() {
        return min;
    }

    public void setMin(double min) {
        this.min = min;
    }

    public int getMp() {
        return mp;
    }

    public void setMp(int mp) {
        this.mp = mp;
    }

    public double getPk() {
        return pk;
    }

    public void setPk(double pk) {
        this.pk = pk;
    }

    public String getpostion() {
        return postion;
    }

    public void setpostion(String postion) {
        this.postion = postion;
    }

    public int getStsrt() {
        return stsrt;
    }

    public void setStsrt(int stsrt) {
        this.stsrt = stsrt;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public double getXag() {
        return xag;
    }

    public void setXag(double xag) {
        this.xag = xag;
    }

    public double getXg() {
        return xg;
    }

    public void setXg(double xg) {
        this.xg = xg;
    }
}
