package com.Elwiki.ElWiki.Model.FirstClass;

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
@Table(name="primeclassicon")
public class iconFirstClass {
    @Column(name="icon")
    private String Icon;

    @Id
    @Column(name="idprimeclass")
    private Long idFirstClass;
}
