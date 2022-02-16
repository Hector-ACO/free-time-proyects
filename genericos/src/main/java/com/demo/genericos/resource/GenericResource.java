package com.demo.genericos.resource;

import com.demo.genericos.model.BaseModel;
import com.demo.genericos.repository.GenericRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@Slf4j
public abstract class GenericResource<T extends BaseModel> {

    private final GenericRepository<T> repository;

    public GenericResource(GenericRepository<T> repository){
        this.repository = repository;
    }

    @GetMapping
    public ResponseEntity get(@RequestParam(required = false) Long id){
        try {
            if(id != null){
                return ResponseEntity.ok(repository.findById(id));
            }
            return ResponseEntity.ok(repository.findAll());
        }catch (Exception e){
            log.error(e.getMessage());
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity save(@Valid @RequestBody T entity, Errors errors){
        try {
            if(errors.hasErrors()){
                return ResponseEntity.badRequest().body(errors.getAllErrors());
            }
            return ResponseEntity.ok(repository.save(entity));
        }catch (DataIntegrityViolationException e){
            return ResponseEntity.internalServerError().body(e.getRootCause());
        }
        catch (Exception e){
            log.error(e.getMessage());
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @PutMapping
    public ResponseEntity update(@Valid @RequestBody T entity, Errors errors){
        try {
            if(errors.hasErrors()){
                return ResponseEntity.badRequest().body(errors.getAllErrors());
            }
            Optional<T> verify = repository.findById(entity.getId());
            if(verify.isPresent()){
                return ResponseEntity.ok(repository.save(entity));
            }
            return ResponseEntity.notFound().build();
        }catch (DataIntegrityViolationException e){
            log.error(e.getLocalizedMessage());
            return ResponseEntity.internalServerError().body(e.getRootCause());
        }
        catch (Exception e){
            log.error(e.getMessage());
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        try {
            Optional<T> verify = repository.findById(id);
            if(verify.isPresent()){
                repository.deleteById(id);
                return ResponseEntity.ok().build();
            }
            return ResponseEntity.notFound().build();
        }catch (Exception e){
            log.error(e.getMessage());
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

}
