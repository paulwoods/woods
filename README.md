# README.MD

## Gateway

### PreRequisites
1. install java21

### Run the project
1. cd gateway
2./gradlew bootRun

### Verify that the gateway is running
In another terminal, enter:
1. `curl localhost:8080/actuator/health`

## Server

### PreRequisites
1. install java21

### Run the Project
1. cd server
2. /gradlew/bootRun

### Verify that the server is running
In another terminal, enter:
1. `curl localhost:8081/actuator/health`
