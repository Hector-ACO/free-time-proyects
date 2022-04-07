package com.demo.genericos.repository;

import com.demo.genericos.model.BaseModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface GenericRepository<T extends BaseModel> extends JpaRepository<T, Long> {
}
