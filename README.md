# README.md

## Source Code

https://github.com/paulwoods/woods

### Prerequisites

edit your host file, and add the following lines:
* 127.0.0.1       gateway
* 127.0.0.1       auth
* 127.0.0.1       server
* 127.0.0.1       web
* 127.0.0.1       client

## Gateway

### Prerequisites
1. install java21

### Run the project
1. cd gateway
2./gradlew bootRun

### Verify that the gateway is running
In another terminal, enter:
1. `curl gateway:8080/actuator/health`

## Server

### Prerequisites
1. install java21

### Run the Project
1. cd server
2. /gradlew/bootRun

### Verify that the server is running
In another terminal, enter:
1. `curl server:8081/actuator/health`

## Client

### Prerequisites
1. install the latest node lts release

### Run the Project
1. cd client
2. npm install
3. npm run dev

### Verify that the client is running

browse to http://client:5173

##

Once all 3 components are running you can browse to
http://gateway:8080/. You should see the home page
of the application. Click the greeting button
and you should see the message returned by the server
displayed underneath the greeting button.


## insomnia

### oisdc

* authorization url = http://auth:9000/oauth2/authorize
* access token url = http://auth:9000/oauth2/token
* client id = oidc-client
* client secret = secret
* use pkce = (un-checked)
* code challenge method = sha-256
* redirect url = http://gateway:8080/login/oauth2/code/oidc-client
advanced
* scope = profile

use for testing:
* https://oauthdebugger.com/
* http://auth:9000/oauth2/authorize?client_id=oidc-client&redirect_uri=https%3A%2F%2Foauthdebugger.com%2Fdebug&scope=profile&response_type=code&response_mode=fragment&state=47awfevg61f&nonce=6wnt1m7ljf

  "auth": {
  "base_url": "http://auth:9000",
  "authorization_url":"http://auth:9000/oauth2/authorize",
  "access_token_url":"http://auth:9000/oauth2/token",
  "client-id":"oidc-client",
  "client-secret":"secret"
  }
  
* https://www.youtube.com/watch?v=QyKOLZjpS5w

http://auth:9000/.well-known/oauth-authorization-server
