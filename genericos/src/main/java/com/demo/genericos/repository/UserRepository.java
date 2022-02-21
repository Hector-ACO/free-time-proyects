package com.demo.genericos.repository;

import com.demo.genericos.model.User;

public interface UserRepository extends GenericRepository<User>{
    User findUserByUser(String user);
}
