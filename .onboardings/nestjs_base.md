# NestJS

## 1. Getting Started with NestJS

Read the following documentation to later build your first NestJS application

- [ ] [First Steps](https://docs.nestjs.com/first-steps)
- [ ] [Controllers](https://docs.nestjs.com/controllers)
- [ ] [Providers](https://docs.nestjs.com/providers)
- [ ] [Modules](https://docs.nestjs.com/modules)

## 2. The Moove It template

As presented in the above resources, NestJS does not provide a single way to scaffold and architect an application. As consequence, to ensure consistency and best practices, Moove It has a NestJS template with basic guidelines and structure. From a developer standpoint, it has all the same features and CLI utilities because it is indeed a NestJS application.

- The template can be found at: https://github.com/moove-it/nestjs-api-template

## 3. Setup your application

- Based on what you have read, build your first NestJS application using the template. In order to do so, instead of generating the application with the NestJS CLI utility, do it by forking the template [repository](https://github.com/moove-it/nestjs-api-template)
- Setup a basic endpoint to get a static list of todos.
- Make sure that you use services, controllers and modules

```
GET /todos
{
  "todos": [
    {
      "id": 1,
      "description": "Learn Javascript",
      "done": false
    },
    {
      "id": 2,
      "description": "Learn NestJS",
      "done": true
    },
    {
      "id": 2,
      "description": "Build something with NestJS",
      "done": false
    }
  ]
}
```

## 4. Learn about database configuration and setup

NestJS has [TypeORM](https://typeorm.io/) natively integrated. Read about configuring the Database with NestJS

- [ ] [Database](https://docs.nestjs.com/techniques/database)
- [ ] [Configuration](https://docs.nestjs.com/techniques/configuration)
- [ ] [Connection Options](https://typeorm.io/#/connection-options) (make sure that you read about synchronize)
- [ ] [Entities](https://typeorm.io/#/entities)
- [ ] [What is Repository](https://typeorm.io/#/working-with-repository)

## 5. Setup the database

There are two ways to handle DB interactions, Repository Pattern and Entity Manager.
At this project we are going to use the repository pattern.

Following the repository pattern and with the synchronize option enabled:

- [ ] Generate your first Entity to represent todos
- [ ] Replace your todos' static data with real data from the DB

## 6. Migrations

Using synchronize at early stages is acceptable but as the application evolves it stops being reliable.
Read about migrations, turn off the synchronize option and build your first migration to generate the todos table.

Make sure to take adventage from the `migration:generate` to write the migration automatically.

- [ ] [Migrations Setup](https://docs.nestjs.com/techniques/database#migrations)
- [ ] [Migrations](https://typeorm.io/#/migrations)
- [ ] Turn off the synchronize option
- [ ] Generate the todos' migration
- [ ] Run the generated migration
