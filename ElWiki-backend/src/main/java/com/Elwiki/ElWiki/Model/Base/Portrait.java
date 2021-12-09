package com.Elwiki.ElWiki.Model.Base;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="portrait")
public class Portrait {
    @Column(name="portrait")
    private String Portrait;

    @Id
    @Column(name="idcharacter")
    private Long idCharacter;
}
