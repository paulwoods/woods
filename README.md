# README.md

## Gateway

### Prerequisites
1. install java21

### Run the project
1. cd gateway
2./gradlew bootRun

### Verify that the gateway is running
In another terminal, enter:
1. `curl localhost:8080/actuator/health`

## Server

### Prerequisites
1. install java21

### Run the Project
1. cd server
2. /gradlew/bootRun

### Verify that the server is running
In another terminal, enter:
1. `curl localhost:8081/actuator/health`

## Client

### Prerequisites
1. install the latest node lts release

### Run the Project
1. cd client
2. npm install
3. npm run dev

### Verify that the client is running

browse to http://localhost:5173

##

Once all 3 components are running you can browse to
http://localhost:8080/. You should see the home page
of the application. Click the greeting button
and you should see the message returned by the server
displayed underneath the greeting button.


