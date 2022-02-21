package com.demo.genericos.model;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Error {

    private String message;

    private String exceptionClass;
}


