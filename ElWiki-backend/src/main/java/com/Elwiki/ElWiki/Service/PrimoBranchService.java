package com.Elwiki.ElWiki.Service;

import com.Elwiki.ElWiki.JPA.FirstClass.RepositoryPrimoBranch;
import com.Elwiki.ElWiki.Model.FirstClass.primoBranch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class PrimoBranchService {

    @Autowired
    RepositoryPrimoBranch repositoryPrimoBranch;

    public primoBranch findById(long id) {
        return repositoryPrimoBranch.findById(id).orElseThrow(() -> new IllegalStateException("the class with  id: " + id + " not exists"));
    }

    public primoBranch findByName(String name) {
        return repositoryPrimoBranch.findByNameClass(name).orElseThrow(() -> new IllegalStateException("the class with  name: " + name + " not exists"));
    }

    public primoBranch save(primoBranch newBranch) {
        return repositoryPrimoBranch.save(newBranch);
    }

    @Transactional
    public primoBranch edit(primoBranch updateBranch) {
        primoBranch editBranch = findById(updateBranch.getId());
        editBranch.setName(updateBranch.getName());
        editBranch.setNameClass(updateBranch.getNameClass());
        editBranch.setWeapon(updateBranch.getWeapon());
        editBranch.setAge(updateBranch.getAge());
        editBranch.setRace(updateBranch.getRace());
        editBranch.setHeight(updateBranch.getHeight());
        editBranch.setWeight(updateBranch.getWeight());
        editBranch.setEspCollection(updateBranch.getEspCollection());
        editBranch.setSpeed(updateBranch.getSpeed());
        editBranch.setAttackRange(updateBranch.getAttackRange());
        editBranch.setDifficulty(updateBranch.getDifficulty());
        editBranch.setType(updateBranch.getType());
        editBranch.setBackground(updateBranch.getBackground());
        editBranch.setIdCharacter(updateBranch.getIdCharacter());
        return editBranch;

    }

    public List<primoBranch> findAll() {
        return repositoryPrimoBranch.findAll();
    }

}
