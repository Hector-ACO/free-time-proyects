package com.Elwiki.ElWiki.JPA.Base;

import com.Elwiki.ElWiki.Model.Base.Portrait;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortraitRepository extends JpaRepository<Portrait,Long> {
}
