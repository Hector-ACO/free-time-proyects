package com.Elwiki.ElWiki.Model.Base;

import com.Elwiki.ElWiki.Model.FirstClass.primoBranch;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "characters")
public class Characters {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(name = "class")
    private String clas;

    private String weapon;

    private int age;

    private String race;

    private String birthday;

    private String height;

    private String weight;

    @Column(name = "bloodtype")
    private String bloodType;

    @OneToMany(mappedBy = "idCharacter", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Portrait> Portrait;
    @OneToMany(mappedBy = "idCharacter", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Icon> Icon;

    private String sentence;

    private String description;

    @Column(name="namehabilityspecial")
    private String nameHabilitySpecial;

    @Column(name = "descriptionhabilityspecial")
    private String descriptionHabilitySpecial;

    private String background;

    private String  speed;

    @Column(name = "attackrange")
    private String attackRange;

    private String difficulty;

    private String type;

    private String color;
    @OneToMany(mappedBy = "idCharacter", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<primoBranch> ClassTree;
}
