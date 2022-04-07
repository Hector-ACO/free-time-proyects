package com.demo.genericos.resource;

import com.demo.genericos.model.User;
import com.demo.genericos.model.UserDto;
import com.demo.genericos.repository.UserRepository;
import com.demo.genericos.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("user")
public class UserResource extends GenericResource<User>{

    public UserResource(UserRepository userRepository){
        super(userRepository);
    }

    @Autowired
    UserService userService;

    @Override
    @PostMapping
    public ResponseEntity save(@Valid @RequestBody User user, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().body(errors.getAllErrors());
        }
        //downcasting
        UserDto dto= new UserDto(userService.save(user));
        dto.setS("hola");
        dto.setI(21);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("name")
    public ResponseEntity findByUser(@RequestParam(required = false) String user){
        if(user != null){
            return findUser(user);
        }else{
            return findUser();
        }

    }

    //overload
    private ResponseEntity findUser(){
        return ResponseEntity.notFound().build();
    }

    private ResponseEntity findUser(String user){
        return ResponseEntity.ok(userService.findByUser(user));
    }
}
