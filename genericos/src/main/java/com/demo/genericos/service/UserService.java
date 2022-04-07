package com.demo.genericos.service;

import com.demo.genericos.model.User;
import com.demo.genericos.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User findByUser(String user){
        return userRepository.findUserByUser(user);
    }

    public User save (User user){return userRepository.save(user);}
}
