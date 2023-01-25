# GraphQL API with Nest

## 1. Getting Started with GraphQL

Get fundamental GraphQL concepts by reading:

- [ ] [Introduction to GraphQL](https://graphql.org/learn)
- [ ] [Queries and Mutations](https://graphql.org/learn/queries)
- [ ] [Schemas and Types](https://graphql.org/learn/schema)

## 2. Design and write your first schema

Take a look at this [diagram](https://drive.google.com/open?id=1oecuuhaecnH4TNOpXp3Q8St0PQ6Am2L0) (open it with [StarUML](https://staruml.io/)):

Based on that model, design an API that supports the following operations:

Movies:
- [ ] List movies (movie should have genre field, support paging, filtering, and sorting)

- [ ] Get movie

Lists:
- [ ] Get user lists
- [ ] Create list
- [ ] Get list
- [ ] Update list
- [ ] Delete list
- [ ] Add movie to list
- [ ] Remove movie from list

Genres:
- [ ] Get genres (genre should have movies field)


User profile:
- [ ] Get user profile (should include lists field)
- [ ] Update user profile
- [ ] Upload user photo
- [ ] Remove user photo

For each one of the above operations, you should specify:
- Type of the operation: Query or Mutation
- Input types
- Output types
- Variables
- Success response schema
- Error response schema

NOTE: Don't design for authentication / authorization in mind. These topics will be covered later.

## 3. Get started with NestJS's GraphQL setup

NestJS has [TypeGraphQL](https://typegraphql.com/) natively integrated. There are two ways to generate a GraphQL API, code first
and schema first.

Read about both of them. At this project we are going to use the code first approach.

- [ ] [Harnessing the power of TypeScript & GraphQL](https://docs.nestjs.com/graphql/quick-start)
- [ ] [Resolvers](https://docs.nestjs.com/graphql/resolvers)
- [ ] [Mutations](https://docs.nestjs.com/graphql/mutations)

## 4. Create your first queries

Based on the specs that you defined at **2** create the following query

- [ ] Push that codebase to the created repository.
- [ ] List movies. This includes adding migrations, seeds, models, query and tests

## 5. Implement movies queries

- [ ] Add paging, filtering, and sorting to List movies
- [ ] Get movie
- [ ] Get genres

## 6. Add authentication

- [ ] Investigate about JWT
- [ ] Check [Authentication](https://docs.nestjs.com/security/authentication) and make sure to read the GraphQL section
- [ ] Follow the instructions for configuring everything needed and add the login endpoint
- [ ] Write a script to add a user and its credentials to the database

## 7. Implement first user's operation

User's operations must check that a valid JWT token comes from the request.

If JWT token is invalid, user's operation should respond with the appropriate response.

A user shouldn't access/modify other users data.

- [ ] Get user's lists

## 8. Implement the rest of lists operations

- [ ] Create list
- [ ] Get list
- [ ] Update list
- [ ] Delete list
- [ ] Add movie to list
- [ ] Remove movie from list

## 9. Implement user's profile endpoints

- [ ] Get user profile
- [ ] Update user profile
- [ ] Upload user photo
- [ ] Remove user photo
