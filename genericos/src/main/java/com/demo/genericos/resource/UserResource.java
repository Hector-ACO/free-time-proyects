package com.demo.genericos.resource;

import com.demo.genericos.model.User;
import com.demo.genericos.repository.UserRepository;
import com.demo.genericos.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
public class UserResource extends GenericResource<User>{

    public UserResource(UserRepository userRepository){
        super(userRepository);
    }

    @Autowired
    UserService userService;

    @GetMapping("name")
    public ResponseEntity findByUser(@RequestParam String user){
        return ResponseEntity.ok(userService.findByUser(user));
    }

}
