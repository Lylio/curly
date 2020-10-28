package com.lylechristine.microservice.curlybackend.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Domain {

    @Id
    private String id;

    private String name;
    private String dns;
    private String ip;
    private String redirect;
    private String host;

}
