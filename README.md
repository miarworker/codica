<img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  
<p>Test task for Codica.</p>
 
## Description

Develop an API server using Node.js, framework NestJS, TypeORM, Docker, PostgreSQL

## Running the app

```bash
# copy repository 
$ git clone https://github.com/miarworker/codica.git

# go to folder codica
$ cd codica

# run docker-compose
$ docker-compose up
```

## Endpoints 

 - GET  /users                                  - get all users
 - GET  /users/{userId}                         - get user data by id
 - GET  /users/{userId}/services                - get all services subscribed by user
 - GET  /users/{userId}/subscribe/{serviceId}   - subscribe user to service
 - POST /users  {name, email}                   - create new user
 - GET  /services                               - get all services
 - GET  /services/{serviceId}                   - get service data by id
 - GET  /services/{serviceId}}/ban/{userId}     - service ban user
 - POST /services/complete {term}               - autocomplete feature, find services where title contains term and sort it by popularity