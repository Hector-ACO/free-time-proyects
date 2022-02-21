package com.demo.genericos.resource;

import com.demo.genericos.model.Sucursal;
import com.demo.genericos.repository.SucursalRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("sucursal")
public class SucursalResource extends GenericResource<Sucursal>{

    public SucursalResource(SucursalRepository sucursalRepository){
        super(sucursalRepository);
    }
}
