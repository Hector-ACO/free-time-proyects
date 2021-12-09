package com.Elwiki.ElWiki.Service;

import com.Elwiki.ElWiki.JPA.Base.CharactersRepository;
import com.Elwiki.ElWiki.Model.Base.Characters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class CharactreService {

    @Autowired
    CharactersRepository charactersRepository;

    public Characters findById(long id) {
        return charactersRepository.findById(id).orElseThrow(() -> new IllegalStateException("the Character with  id: " + id + " not exists"));
    }

    public Characters SerchForId(String name) {
        return charactersRepository.findByName(name).orElseThrow();
    }

    public Characters save(Characters characters) {
        return charactersRepository.save(characters);
    }


    @Transactional
    public Characters update(Characters characters) {
        Characters updateCharacter = findById(characters.getId());
        updateCharacter.setName(characters.getName());
        updateCharacter.setClas(characters.getClas());
        updateCharacter.setWeapon(characters.getWeapon());
        updateCharacter.setAge(characters.getAge());
        updateCharacter.setRace(characters.getRace());
        updateCharacter.setBirthday(characters.getBirthday());
        updateCharacter.setHeight(characters.getHeight());
        updateCharacter.setWeight(characters.getWeight());
        updateCharacter.setBloodType(characters.getBloodType());
        updateCharacter.setSentence(characters.getSentence());
        updateCharacter.setDescription(characters.getDescription());
        updateCharacter.setNameHabilitySpecial(characters.getNameHabilitySpecial());
        updateCharacter.setDescriptionHabilitySpecial(characters.getDescriptionHabilitySpecial());
        updateCharacter.setBackground(characters.getBackground());
        updateCharacter.setSpeed(characters.getSpeed());
        updateCharacter.setAttackRange(characters.getAttackRange());
        updateCharacter.setDifficulty(characters.getDifficulty());
        updateCharacter.setType(characters.getType());
        return updateCharacter;
    }

    public List<Characters> getAll() {
        return charactersRepository.findAll();
    }

}