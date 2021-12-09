package com.Elwiki.ElWiki.Model.FirstClass;

import com.Elwiki.ElWiki.Model.Base.Portrait;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "primebranch")
public class primoBranch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @Column(name="class")
    private String nameClass;

    private String weapon;

    private int age;

    private String race;

    private String height;

    private String weight;

    @Column(name = "espcollection")
    private String espCollection;

    private String speed;

    @Column(name = "attackrange")
    private String attackRange;

    private String difficulty;

    private String type;

    private String background;

    @Column(name="idcharacter")
    private Long idCharacter;

    @OneToMany(mappedBy = "idFirstClass", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<portraitFirstClass> Portrait;
    @OneToMany(mappedBy = "idFirstClass", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<iconFirstClass> Icon;
}
