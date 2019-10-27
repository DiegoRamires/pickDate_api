## Dependencies

```
- postgresql v9.5.19
- mongodb v3.6.3
- redis server v4.0.9
- yarn v1.19.1
- node v10.15.3
```

```
cp .env.example .env
```

### Run this app local

```shell
start postgresql

start mongodb

redis-server --port 6360

run the scripts:
 - yarn dev
 - yarn queue
```

#### Endpoints

```
POST /users { name: 'Jhon Doe', email: 'jhon@doe.com', password: 123123 }
PUT /users - Bearer Token { name: 'Jhon R. Doe' email: 'jhon@doe.com', oldPassword: '123123', password: '121212', confirmPassword: '121212', avatar_id: '' }

POST /login { email: 'jhon@doe.com', password: '121212'}

POST /files { file: image.jpg}
```
