package com.lylechristine.microservice.curlybackend.repository;

import com.lylechristine.microservice.curlybackend.domain.Domain;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DomainRepository extends MongoRepository<Domain, String> {
}
