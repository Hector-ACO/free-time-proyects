package com.demo.genericos.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@NoArgsConstructor
public class UserDto extends User{

    public UserDto (User user){
        super.setId(user.getId());
        super.setUser(user.getUser());
        super.setPassword(user.getPassword());
    }

    @NotEmpty(message = "s se encuentra vacio")
    private String s;

    @NotEmpty(message = "i se encuentra vacio")
    private Integer i;

}
