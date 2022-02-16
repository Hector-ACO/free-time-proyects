package com.demo.genericos.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.validation.constraints.NotEmpty;

@Entity
@Data
public class User extends BaseModel {

    @NotEmpty(message = "El usuario se encuentra vacio")
    private String user;

    @NotEmpty(message = "La contrasena se encuentra vacio")
    private String password;

}
