package com.Elwiki.ElWiki.JPA.Base;

import com.Elwiki.ElWiki.Model.Base.Characters;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CharactersRepository extends JpaRepository<Characters,Long> {
    Optional<Characters> findByName(String name);
}
