package com.lylechristine.microservice.curlybackend.controller;

import com.lylechristine.microservice.curlybackend.domain.Domain;
import com.lylechristine.microservice.curlybackend.repository.DomainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class DomainController {
    @Autowired
    private DomainRepository domainRepository;

    @GetMapping("/")
    public List<Domain> GetDomains() {
        return domainRepository.findAll();
    }
    @GetMapping("/{id}")
    public Domain GetDomain(@PathVariable String id) {
        return domainRepository.findById(id).orElse(null);
    }
    @PostMapping("/")
    public Domain postMethodName(@RequestBody Domain user) {
        return domainRepository.save(user);
    }
    @PutMapping("/")
    public Domain PutMapping(@RequestBody Domain newUser) {
        Domain oldUser = domainRepository.findById(newUser.getId()).orElse(null);
        oldUser.setName(newUser.getName());
        oldUser.setIp(newUser.getIp());
        oldUser.setRedirect(newUser.getRedirect());
        oldUser.setHost(newUser.getHost());
        domainRepository.save(oldUser);
        return oldUser;
    }
    @DeleteMapping("/{id}")
    public String DeleteUser(@PathVariable String id) {
        domainRepository.deleteById(id);
        return id;
    }
}
