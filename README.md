# IoasysCamp - Final Countdown

This projects is being develop for the final challenge of the IoasysCamp.

## Installation

To be writen.

## Docker-Compose configuration

```typescript
version: "3.9"

services:
  ["NOME_SERVICE_DATABASE"]:
    image: postgres
    container_name: ["NOME_CONTAINER_DATABASE"]
    restart: always
    ports:
      - "65432:5432"
    environment:
      - POSTGRES_USER=["USUARIO"]
      - POSTGRES_PASSWORD=["SENHA_USUARIO"]
      - POSTGRES_DB=["NOME_DATABASE"]
    volumes:
      - pgdata:/data/postgres


  app:
    build: .
    container_name: ["NOME_CONTAINER_APP"]
    restart: always
    ports:
      - 3000:3000
    volumes:
      - .:/usr/app
      - /usr/app/node_modules
    links:
      - ["NOME_SERVICE_DATABASE"]
    depends_on:
      - ["NOME_SERVICE_DATABASE"]

volumes:
  pgdata:
    driver: local
```

## Notas

- No container do banco de dados, a porta 65432 foi utilizada porque estava dando erro na minha máquinha a porta padrão 5432 por já estar sendo utilizada.
- Recomendo utilizar o mesmo nome para o serviço e para o container, não sei se é uma boa prática ou não, mas acho mais fácil de lembrar.
- Caso utilize o Typeorm, no ormconfig.js o DB_HOST precisa ser o nome do seu container do banco de dados.
