package com.premierzone;

import org.springframework.data.jpa.domain.Specification;

public class PlayerSpecification {
    
    public static Specification<Player> hasNation(String nation) {
        return (
            (root, query, cb) ->
            nation == null? null : cb.like(cb.lower(root.get("nation")), nation.toLowerCase())
        );
    }

    public static Specification<Player> hasName(String name) {
        return (
            (root, query, cb) ->
            name == null? null : cb.like(cb.lower(root.get("name")), name.toLowerCase())
        );
    }

    public static Specification<Player> hasTeam(String team) {
        return (
            (root, query, cb) ->
            team == null? null : cb.like(cb.lower(root.get("team")), team.toLowerCase())
        );
    }

    // public static Specification<Player> hasPostion(String postion) {
    //     return (
    //         (root, query, cb) ->
    //         postion == null? null : cb.like(cb.lower(root.get("postion")), postion.toLowerCase())
    //     );
    // }

    public static Specification<Player> hasAge(int age) {
        return (
            (root, query, cb) ->
            age == 0? null : cb.equal(root.get("age"), age)
        );
    }

    public static Specification<Player> ageBtween(int maxAge, int minAge) {
        return (root, query, cb) -> {
            if((maxAge > StaticValue.defultMaxAge || maxAge == 0) && minAge < StaticValue.defultMinAge) return null;
            return cb.between(root.get("age"), maxAge, minAge);
        };
    }
}