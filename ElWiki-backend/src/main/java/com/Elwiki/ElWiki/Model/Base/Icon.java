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
@Table(name="icon")
public class Icon {
    @Column(name="icon")
    private String Icon;

    @Id
    @Column(name="idcharacter")
    private Long idCharacter;
}
