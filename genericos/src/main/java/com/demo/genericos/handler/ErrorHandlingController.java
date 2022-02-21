package com.demo.genericos.handler;

import com.demo.genericos.model.Error;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
@Slf4j
public class ErrorHandlingController {


    @ExceptionHandler(DataIntegrityViolationException.class)
    @ResponseBody
    public ResponseEntity onDataIntegrityViolationException(DataIntegrityViolationException e){
        Error error = new Error(e.getRootCause().getMessage(),e.getClass().toString());
        return new ResponseEntity(error,HttpStatus.CONFLICT);
    }

    @ExceptionHandler(Exception.class)
    @ResponseBody
    public ResponseEntity onException(Exception e){
        Error error = new Error(e.getMessage(),e.getClass().toString());
        return new ResponseEntity(error,HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
