package com.demo.genericos.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

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
