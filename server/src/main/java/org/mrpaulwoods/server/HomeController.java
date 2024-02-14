package org.mrpaulwoods.server;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping
@RequiredArgsConstructor
@Slf4j
public class HomeController {

    @GetMapping
    public ResponseEntity<Map<String,String>> greeting() {
        log.info("greeting()");
        return ResponseEntity.ok(Map.of("message", "Hello World"));
    }

}
