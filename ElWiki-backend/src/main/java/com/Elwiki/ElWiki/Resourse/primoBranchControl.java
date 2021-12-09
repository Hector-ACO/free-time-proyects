package com.Elwiki.ElWiki.Resourse;

import com.Elwiki.ElWiki.Model.FirstClass.primoBranch;
import com.Elwiki.ElWiki.Service.PrimoBranchService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/Primo")
public class primoBranchControl {

    @Autowired
    PrimoBranchService primoBranchService;

//    @GetMapping
//    public ResponseEntity getall() {
//        try {
//            return ResponseEntity.ok(primoBranchService.findAll());
//        } catch (Exception e) {
//            log.error(e.getMessage());
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
//        }
//    }

    @GetMapping(name = "/{Classname}")
    public ResponseEntity findbyClass(@PathVariable String className) {
        try {
            return ResponseEntity.ok(primoBranchService.findByName(className));
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
    @PostMapping
    public ResponseEntity save(@RequestBody primoBranch newBranch) {
        try {
            return ResponseEntity.ok(

                    primoBranchService.save(newBranch));
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity edit(@PathVariable Long id, @RequestBody primoBranch primoBranch) {
        try {
            primoBranch verifyForid=primoBranchService.findById(id);
            if (verifyForid == null) {
                log.error("file Not found");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("File not Found");
            }
            return ResponseEntity.ok(primoBranchService.edit(primoBranch));
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }

    }
}
