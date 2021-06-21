# LuizaLabs Challange

This API project was done for a challenge issued by LuizaLabs. We were tasked with developing an API in nodejs and deployed with docker. This API also had to follow the best practices proposed on Clean Code and take into account Design Patterns


## Getting Started

These instructions will get you a copy of the project up and running on your local machine, for development and testing purposes. 

### Prerequisites

You must install node.js, docker and docker-compose.

```
I strongly recommend downloading the LTS versions from:
https://nodejs.org/en/ 
https://www.docker.com/products/docker-desktop
```

### Installing

First, you'll clone the repository from github. 
Then, open the folder you just cloned - make sure your docker service is running. 
Run docker-compose build to create the container, and, to finish it off, run docker-compose up to start the container.
With these steps, the environment should be running smoothly at localhost:3333.

```
git clone https://github.com/LeoFC97/tdd-ts-mglu-study
cd dd-ts-mglu-study
docker-compose build
docker-compose up
```

### Startup database
You need to create the database tables at your local machine, afeter installing the project run the follwing command:
```
npm run typeorm migration:run
```
This will create the necessary tables.

## Request & Response Examples

### API Resources

### Clientes
  - [GET /clientes](#get-clientes)
  - [GET /clientes](#get-clientes/:id)
  - [DEL /clientes](#del-clientes/:id)
  - [PUT /clientes](#put-clientes/:id)
  - [POST /clientes](#post-clientes)

### Produtos
  - [GET /produtos](#get-produtos)
  - [GET /produtos](#get-produtos/:id)
  - [DEL /produtos](#del-produtos/:id)
  - [PUT /produtos](#put-produtos/:id)
  - [POST /produtos](#post-produtos)

### GET /clientes

Example: http://127.0.0.1:3000/clientes

Response body:
```
{
  "clients": [
    {
      "code": "1",
      "name": "leo",
      "cpf": "12981245875",
      "sexo": "masculino",
      "email": "leonardo@teste.com"
    },
    {
      "code": "2",
      "name": "Ana",
      "cpf": "71941542375",
      "sexo": "feminino",
      "email": "ana@teste.com"
    }
  ]
}
```
### GET /clientes/:id

Example: http://127.0.0.1:3000/clientes/1

Response body:
```{
  "client": {
    "code": "1",
    "name": "leo",
    "cpf": "12981245875",
    "sexo": "masculino",
    "email": "leonardo@teste.com"
  }
}
```

### DEL /clientes/:id

Example: http://127.0.0.1:3000/clientes/:id

Response body:
```
{
  "clientWasRemoved": true
}
```

### PUT /clientes/:id

Example: http://127.0.0.1:3000/clientes/:id

Request body:
```
{
	"name":"leo",
	"cpf":"14981258755",
	"sexo":"masculino",
	"email":"leonardo@teste.com"
}
```
Response body:

```
{
  "clientIdUpdated": "2"
}
```

### POST /clientes/

Example: http://127.0.0.1:3000/clientes

Request body:
```
{
	"name":"leo",
	"cpf":"14981258755",
	"sexo":"masculino",
	"email":"leonardo@teste.com"
}
```
Response body:
```
{
  "clientIdUpdated": "2"
}
```
### GET /produtos

Example: http://127.0.0.1:3000/produtos

Response body:
```
{
  "products": [
    {
      "code": "1",
      "name": "produto de teste",
      "color": "azul",
      "size": "big",
      "value": 30
    },
    {
      "code": "2",
      "name": "produto de teste",
      "color": "azul",
      "size": "big",
      "value": 30
    }
  ]
}
```
### GET /produtos/:id

Example: http://127.0.0.1:3000/produtos/1

Response body:
```
{
  "product": {
    "code": "1",
    "name": "produto de teste",
    "color": "azul",
    "size": "big",
    "value": 30
  }
}
```

### DEL /produtos/:id

Example: http://127.0.0.1:3000/produtos/:id

Response body:
```
{
  "productWasRemoved": true
}
```

### PUT /produtos/:id

Example: http://127.0.0.1:3000/produtos/:id

Request body:
```
{
	"name":"produto de teste",
	"color":"azul",
	"size":"big",
	"value":"30.334"
}
```
Response body:

```
{
  "productIdUpdated": "1"
}
```

### POST /produtos/

Example: http://127.0.0.1:3000/produtos

Request body:
```
{
	"code":"1",
	"name":"produto de teste",
	"color":"azul",
	"size":"big",
	"value":"30.0"
}
```
Response body:
```
{
  "message": "Product successful created"
}
```

## Running the Unity tests

There are Unity Tests on the project in order to ensure that it runs cohesively, and they can be found at their respective folders.
The tests cover subjects such as string sanitazing and sorting methods. The tests in place are there to make sure the code isn't broken while the API was being developed - it is essential for present and future maintenance.

```
npm run test
```

### Style guide

The standard eslint rules were applied, and the full list can be found at https://eslint.org/docs/rules/
If you want to configure your own eslint rules, the file can be found at [.eslintrc.json](./.eslintrc.json)

```
{
  "env": {
    "node": true,
    "es2020": true
  },
  "ignorePatterns": ["dist", "node_modules", "**/vendor/*.js"],
  "plugins": [
    "@typescript-eslint",
    "promise"
  ],
  "extends": [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:promise/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": [
          "node_modules",
          "src"
        ]
      },
      "typescript": {}
    }
  },
  "rules": {
    "complexity": [
      "error",
      {
        "max": 5
      }
    ],
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "class-methods-use-this": "off",
    "linebreak-style": 0
  }
}
```


## Enviroment

 You must have setup your enviroment .env file at project root when deploying the API.

## CI/CD Github Actions

We use GitHub actions for Continuous Integration for running the tests when there's a PR and pushes on the master branch. The configuration file can be found at [nodejs.yml](./.github/workflows/nodejs.yml)

## Built With

* [Nodejs](https://nodejs.org/en/docs/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Docker](https://www.docker.com/) - Used to build cointeined applications.
* [Express](https://www.npmjs.com/package/express/) - HTTP server
* [TypeScript](https://www.typescriptlang.org/) - Elegant way to code Javascript xD

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

