# GraphQL API



## 1. Getting Started with GraphQL

Get fundamental GraphQL concepts by reading:

- [ ]  [Introduction to GraphQL](https://graphql.org/learn)
- [ ]  [Queries and Mutations](https://graphql.org/learn/queries)
- [ ] [Schemas and Types](https://graphql.org/learn/schema)


## 2. Design and write your first schema

Take a look at this [diagram]( https://drive.google.com/open?id=1oecuuhaecnH4TNOpXp3Q8St0PQ6Am2L0) (open it with StarUML):

Design an API for the following entities: Movie, Genre and User. The API must support the following features:

* **Movies**
- [ ] List
- [ ] Create
- [ ] Filter by genre and name
- [ ] Paginate
- [ ] Update
- [ ] Delete

* **Genres**
- [ ] List (with movies field)

* **Users**
- [ ] List
- [ ] Create
- [ ] Login
- [ ] Delete
- [ ] Update 

## 3. Getting started

> If you are using Ruby read the following sections:
  - [ ] [Get started with graphql-ruby](https://www.howtographql.com/graphql-ruby/1-getting-started/)
  - [ ] [Queries](https://www.howtographql.com/graphql-ruby/2-queries/)
  - [ ] [Mutations](https://www.howtographql.com/graphql-ruby/3-mutations/)

> If you are using NodeJS read the following sections:
  - [ ] [Get started with Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started)
  - [ ] [Defining a schema](https://www.apollographql.com/docs/apollo-server/schema/schema) (and subsequent related pages)
  - [ ] [Fetching data](https://www.apollographql.com/docs/apollo-server/data/data) (and subsequent related pages)

## 4. Create your first queries

Based on the specs that you defined at **2** create the following queries
- [ ] Movies' list
- [ ] Users' list

## 5. Create your first mutation

Based on the specs that you defined at **2** create the following mutations
- [ ] Movies' creation
- [ ] Users' creation

## 6. Add arguments to your queries

Based on the specs that you defined at **2** 
- [ ] Add filters to the movies' query

## 7. Work with field resolvers

Based on the specs that you defined at **2** 
- [ ] Add Genres' list query
- [ ] Add genre field resolver to movies' query
- [ ] Add movies field resolver to genres' query

## 8. Complex migrations

Based on the specs that you defined at **2** 
- [ ] Add Users' login mutation
- [ ] Add Movies' update mutation
- [ ] Add Users' delete mutation

## 9. Complex queries

Based on the specs that you defined at **2** 
- [ ] Add pagination to Movies' query

## 10. Tests

- [ ] Add tests to your code (take a look at https://www.apollographql.com/docs/apollo-server/testing/mocking)

## 11. Advanced Performance Improvements

- [ ] Use [data loaders](https://github.com/graphql/dataloader) to improve your field resolvers performance  
