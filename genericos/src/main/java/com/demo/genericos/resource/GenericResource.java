package com.demo.genericos.resource;

import com.demo.genericos.model.BaseModel;
import com.demo.genericos.repository.GenericRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

public abstract class GenericResource<T extends BaseModel> {

    private final GenericRepository<T> repository;

    public GenericResource(GenericRepository<T> repository){
        this.repository = repository;
    }

    @GetMapping
    public ResponseEntity get(@RequestParam(required = false) Long id){
        if(id != null){
            return ResponseEntity.ok(repository.findById(id));
        }
        return ResponseEntity.ok(repository.findAll());
    }

    @PostMapping
    public ResponseEntity save(@Valid @RequestBody T entity, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().body(errors.getAllErrors());
        }
        return ResponseEntity.ok(repository.save(entity));
    }

    @Transactional
    @PutMapping
    public ResponseEntity update(@Valid @RequestBody T entity, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().body(errors.getAllErrors());
        }
        Optional<T> verify = repository.findById(entity.getId());
        if(verify.isPresent()){
            return ResponseEntity.ok(repository.save(entity));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        Optional<T> verify = repository.findById(id);
        if(verify.isPresent()){
            repository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

}
