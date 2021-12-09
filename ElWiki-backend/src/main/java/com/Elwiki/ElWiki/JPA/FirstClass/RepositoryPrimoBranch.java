package com.Elwiki.ElWiki.JPA.FirstClass;

import com.Elwiki.ElWiki.Model.FirstClass.primoBranch;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RepositoryPrimoBranch extends JpaRepository<primoBranch,Long> {
    Optional<primoBranch>findByNameClass(String name);
}
