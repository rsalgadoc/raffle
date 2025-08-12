package io.swagger.api;

import io.swagger.model.Error;
import io.swagger.model.Raffle;
import io.swagger.model.Raffle.StatusEnum;
import io.swagger.model.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2025-08-11T23:57:49.439903428Z[GMT]")
@RestController
public class V1ApiController implements V1Api {

    private static final Logger log = LoggerFactory.getLogger(V1ApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public V1ApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<Raffle> addRaffle(@Parameter(in = ParameterIn.DEFAULT, description = "Create a new raffle in the store", required=true, schema=@Schema()) @Valid @RequestBody Raffle body
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<Raffle>(objectMapper.readValue("{\n  \"country\" : {\n    \"alpha-2\" : \"AF\",\n    \"alpha-3\" : \"AFG\",\n    \"name\" : \"Afghanistan\",\n    \"numeric\" : \"4\"\n  },\n  \"participationPeriod\" : \"1 de Julio a 14 de Agosto\",\n  \"drawTime\" : \"20:00\",\n  \"imageUrl\" : \"/images/twitter-logo.png\",\n  \"rulesUrl\" : \"#\",\n  \"name\" : \"Sorteo de Verano\",\n  \"description\" : \"Discover and join the latest raffles. Your luck awaits!\",\n  \"id\" : 10,\n  \"prize\" : \"Barbacoa de alta gama, set de sillas de playa y nevera portátil.\",\n  \"drawDate\" : \"2025-08-15\",\n  \"status\" : \"active\"\n}", Raffle.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<Raffle>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<Raffle>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<User> createUser(@Parameter(in = ParameterIn.DEFAULT, description = "Created user object", schema=@Schema()) @Valid @RequestBody User body
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<User>(objectMapper.readValue("{\n  \"firstName\" : \"John\",\n  \"lastName\" : \"James\",\n  \"password\" : \"12345\",\n  \"userStatus\" : 1,\n  \"phone\" : \"12345\",\n  \"id\" : 10,\n  \"email\" : \"john@email.com\",\n  \"username\" : \"theUser\"\n}", User.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<User>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<User>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<User> createUsersWithListInput(@Parameter(in = ParameterIn.DEFAULT, description = "", schema=@Schema()) @Valid @RequestBody List<User> body
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<User>(objectMapper.readValue("{\n  \"firstName\" : \"John\",\n  \"lastName\" : \"James\",\n  \"password\" : \"12345\",\n  \"userStatus\" : 1,\n  \"phone\" : \"12345\",\n  \"id\" : 10,\n  \"email\" : \"john@email.com\",\n  \"username\" : \"theUser\"\n}", User.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<User>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<User>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Void> deleteRaffle(@Parameter(in = ParameterIn.PATH, description = "Raffle id to delete", required=true, schema=@Schema()) @PathVariable("raffleId") Long raffleId
,@Parameter(in = ParameterIn.HEADER, description = "" ,schema=@Schema()) @RequestHeader(value="api_key", required=false) String apiKey
) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Void> deleteUser(@Parameter(in = ParameterIn.PATH, description = "The name that needs to be deleted", required=true, schema=@Schema()) @PathVariable("username") String username
) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<List<Raffle>> findRafflesByStatus(@Parameter(in = ParameterIn.QUERY, description = "Status values that need to be considered for filter" ,schema=@Schema(allowableValues={ "available", "pending", "sold" }
, defaultValue="available")) @Valid @RequestParam(value = "status", required = false, defaultValue="available") String status
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<Raffle>>(objectMapper.readValue("[ {\n  \"country\" : {\n    \"alpha-2\" : \"AF\",\n    \"alpha-3\" : \"AFG\",\n    \"name\" : \"Afghanistan\",\n    \"numeric\" : \"4\"\n  },\n  \"participationPeriod\" : \"1 de Julio a 14 de Agosto\",\n  \"drawTime\" : \"20:00\",\n  \"imageUrl\" : \"/images/twitter-logo.png\",\n  \"rulesUrl\" : \"#\",\n  \"name\" : \"Sorteo de Verano\",\n  \"description\" : \"Discover and join the latest raffles. Your luck awaits!\",\n  \"id\" : 10,\n  \"prize\" : \"Barbacoa de alta gama, set de sillas de playa y nevera portátil.\",\n  \"drawDate\" : \"2025-08-15\",\n  \"status\" : \"active\"\n}, {\n  \"country\" : {\n    \"alpha-2\" : \"AF\",\n    \"alpha-3\" : \"AFG\",\n    \"name\" : \"Afghanistan\",\n    \"numeric\" : \"4\"\n  },\n  \"participationPeriod\" : \"1 de Julio a 14 de Agosto\",\n  \"drawTime\" : \"20:00\",\n  \"imageUrl\" : \"/images/twitter-logo.png\",\n  \"rulesUrl\" : \"#\",\n  \"name\" : \"Sorteo de Verano\",\n  \"description\" : \"Discover and join the latest raffles. Your luck awaits!\",\n  \"id\" : 10,\n  \"prize\" : \"Barbacoa de alta gama, set de sillas de playa y nevera portátil.\",\n  \"drawDate\" : \"2025-08-15\",\n  \"status\" : \"active\"\n} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<List<Raffle>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<Raffle>>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Raffle> getRaffleById(@Parameter(in = ParameterIn.PATH, description = "ID of raffle to return", required=true, schema=@Schema()) @PathVariable("raffleId") Long raffleId
) {
        System.out.println("***********getRaffleById*********");    
        String accept = request.getHeader("Accept");
        System.out.println("***********accept*********" + accept);
        if (accept != null && accept.contains("application/json")) {
            // Mock Raffle object
            Raffle raffle = new Raffle();
            raffle.setId(raffleId);
            raffle.setName("Mock Raffle " + raffleId);
            raffle.setDescription("This is a mock raffle for testing.");
            raffle.setPrize("Mock Prize");
            raffle.setDrawDate("2025-08-15");
            raffle.setDrawTime("20:00");
            raffle.setParticipationPeriod("1 de Julio a 14 de Agosto");
            raffle.setImageUrl("/images/mock-image.png");
            raffle.setRulesUrl("#");
            raffle.setStatus(StatusEnum.fromValue("active"));
            // You may need to set the country as well if required by your model
            // raffle.setCountry(...);
            System.out.println("Returning mock raffle with ID: " + raffleId);
            return new ResponseEntity<Raffle>(raffle, HttpStatus.OK);
        }
        System.out.println("***********NOT_IMPLEMENTED*********");
        return new ResponseEntity<Raffle>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<User> getUserByName(@Parameter(in = ParameterIn.PATH, description = "The name that needs to be fetched. Use user1 for testing", required=true, schema=@Schema()) @PathVariable("username") String username
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<User>(objectMapper.readValue("{\n  \"firstName\" : \"John\",\n  \"lastName\" : \"James\",\n  \"password\" : \"12345\",\n  \"userStatus\" : 1,\n  \"phone\" : \"12345\",\n  \"id\" : 10,\n  \"email\" : \"john@email.com\",\n  \"username\" : \"theUser\"\n}", User.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<User>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<User>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<String> loginUser(@Parameter(in = ParameterIn.QUERY, description = "The user name for login" ,schema=@Schema()) @Valid @RequestParam(value = "username", required = false) String username
,@Parameter(in = ParameterIn.QUERY, description = "The password for login in clear text" ,schema=@Schema()) @Valid @RequestParam(value = "password", required = false) String password
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<String>(objectMapper.readValue("\"\"", String.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<String>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Void> logoutUser() {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Raffle> updateRaffle(@Parameter(in = ParameterIn.DEFAULT, description = "Update an existent raffle in the store", required=true, schema=@Schema()) @Valid @RequestBody Raffle body
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<Raffle>(objectMapper.readValue("{\n  \"country\" : {\n    \"alpha-2\" : \"AF\",\n    \"alpha-3\" : \"AFG\",\n    \"name\" : \"Afghanistan\",\n    \"numeric\" : \"4\"\n  },\n  \"participationPeriod\" : \"1 de Julio a 14 de Agosto\",\n  \"drawTime\" : \"20:00\",\n  \"imageUrl\" : \"/images/twitter-logo.png\",\n  \"rulesUrl\" : \"#\",\n  \"name\" : \"Sorteo de Verano\",\n  \"description\" : \"Discover and join the latest raffles. Your luck awaits!\",\n  \"id\" : 10,\n  \"prize\" : \"Barbacoa de alta gama, set de sillas de playa y nevera portátil.\",\n  \"drawDate\" : \"2025-08-15\",\n  \"status\" : \"active\"\n}", Raffle.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<Raffle>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<Raffle>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Raffle> updateRaffleWithForm(@Parameter(in = ParameterIn.PATH, description = "ID of raffle that needs to be updated", required=true, schema=@Schema()) @PathVariable("raffleId") Long raffleId
,@Parameter(in = ParameterIn.QUERY, description = "Name of raffle that needs to be updated" ,schema=@Schema()) @Valid @RequestParam(value = "name", required = false) String name
,@Parameter(in = ParameterIn.QUERY, description = "Status of raffle that needs to be updated" ,schema=@Schema()) @Valid @RequestParam(value = "status", required = false) String status
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<Raffle>(objectMapper.readValue("{\n  \"country\" : {\n    \"alpha-2\" : \"AF\",\n    \"alpha-3\" : \"AFG\",\n    \"name\" : \"Afghanistan\",\n    \"numeric\" : \"4\"\n  },\n  \"participationPeriod\" : \"1 de Julio a 14 de Agosto\",\n  \"drawTime\" : \"20:00\",\n  \"imageUrl\" : \"/images/twitter-logo.png\",\n  \"rulesUrl\" : \"#\",\n  \"name\" : \"Sorteo de Verano\",\n  \"description\" : \"Discover and join the latest raffles. Your luck awaits!\",\n  \"id\" : 10,\n  \"prize\" : \"Barbacoa de alta gama, set de sillas de playa y nevera portátil.\",\n  \"drawDate\" : \"2025-08-15\",\n  \"status\" : \"active\"\n}", Raffle.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<Raffle>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<Raffle>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Void> updateUser(@Parameter(in = ParameterIn.PATH, description = "name that need to be deleted", required=true, schema=@Schema()) @PathVariable("username") String username
,@Parameter(in = ParameterIn.DEFAULT, description = "Update an existent user in the store", schema=@Schema()) @Valid @RequestBody User body
) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

}
