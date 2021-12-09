package com.Elwiki.ElWiki.Resourse;

import com.Elwiki.ElWiki.Model.Base.Characters;
import com.Elwiki.ElWiki.Service.CharactreService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/Character")
public class CharacterControl {
    @Autowired
    CharactreService charactreService;

    @GetMapping("/all")
    public ResponseEntity getAll() {
        return ResponseEntity.ok(charactreService.getAll());
    }

    @GetMapping("/{name}")
    public ResponseEntity get(@PathVariable String name) {
        try {
            return ResponseEntity.ok(charactreService.SerchForId(name));
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }

    }

    @PostMapping
    public ResponseEntity save(@RequestBody Characters characters) {
        try {
            return ResponseEntity.ok(charactreService.save(characters));
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity edit(@PathVariable Long id, @RequestBody Characters characters) {
        try {
            Characters verifyId = charactreService.findById(id);
            if (verifyId == null) {
                log.error("file Not found");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("File not Found");
            }
            return ResponseEntity.ok(charactreService.update(characters));
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }

    }

}
