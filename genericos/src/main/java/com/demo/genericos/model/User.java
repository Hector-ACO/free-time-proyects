package com.demo.genericos.model;

import lombok.Data;
import org.hibernate.validator.constraints.UniqueElements;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotEmpty;

@Entity
@Data
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"user"}))
public class User extends BaseModel {

    @NotEmpty(message = "El usuario se encuentra vacio")
    @Column(unique = true)
    private String user;

    @NotEmpty(message = "La contrasena se encuentra vacio")
    private String password;

}
