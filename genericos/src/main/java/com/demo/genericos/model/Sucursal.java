package com.demo.genericos.model;

import lombok.Data;

import javax.persistence.Entity;

@Entity
@Data
public class Sucursal extends BaseModel {

    private String name;

}
