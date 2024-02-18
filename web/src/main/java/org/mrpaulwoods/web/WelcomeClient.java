package org.mrpaulwoods.web;

import org.springframework.web.service.annotation.GetExchange;
import org.springframework.web.service.annotation.HttpExchange;

@HttpExchange("http://server:8081")
public interface WelcomeClient {

    @GetExchange("/")
    String getWelcome();

}
