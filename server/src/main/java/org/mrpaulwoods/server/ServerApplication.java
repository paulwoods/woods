package org.mrpaulwoods.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.annotation.Id;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.security.Principal;
import java.util.Map;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

}

interface CustomerRepository extends ListCrudRepository<Customer, Integer> {

}

record Customer(@Id Integer id, String name, String email) {

}

@Controller
@ResponseBody
class MeHttpController {

	@GetMapping("/me")
	Map<String, String> principal(Principal principal) {
		return Map.of("name", principal.getName());
	}

}
