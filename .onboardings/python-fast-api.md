# Python REST FastAPI

Build a REST API using FastAPI.

## 1. FastAPI Introduction

Follow the FastAPI introduction and write your first simple FastAPI app.

- [ ] Start a new project using poetry
- [ ] Follow [FastAPI introduction](https://fastapi.tiangolo.com/#installation)
  - Follow the introduction from the __Installation__ section until its end

## 2. Learn REST

Learn the basics about [REST](https://restfulapi.net/).

Read the following sections / topics:
- [ ] Learn REST (the whole section)
- [ ] Idempotence
- [ ] PUT vs POST

Also, check out and keep as a reference [Best Practices for Designing a Pragmatic RESTful API](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api).

## 3. FastAPI Tutorial

Follow FastAPI official tutorial, which covers the main features of the framework.

- [ ] [First Steps](https://fastapi.tiangolo.com/tutorial/first-steps/)
- [ ] [Path Parameters](https://fastapi.tiangolo.com/tutorial/path-params/)
- [ ] [Query Parameters](https://fastapi.tiangolo.com/tutorial/query-params/)
- [ ] [Extra Data Types](https://fastapi.tiangolo.com/tutorial/extra-data-types/)
- [ ] [Response Model](https://fastapi.tiangolo.com/tutorial/response-model/)
- [ ] [Response Status Code](https://fastapi.tiangolo.com/tutorial/response-status-code/)
- [ ] [Handling Errors](https://fastapi.tiangolo.com/tutorial/handling-errors/)

## 4. FastAPI & PostgreSQL

Make sure PostgreSQL is installed and running in your environment. It can be done by executing [`pg_ctl --help`](https://www.postgresql.org/docs/current/app-pg-ctl.html) in the terminal. If a help text for the command is displayed, then it can be assumed that PostgreSQL is installed. If not, checkout [Postgres.app](https://postgresapp.com/). 

It's also convenient to have a GUI DB tool like [DBeaver](https://dbeaver.io/) or [TablePlus](https://www.tableplus.io/).

Follow these tutorials.

- [ ] [Relational Databases](https://fastapi.tiangolo.com/tutorial/sql-databases/) (_Use PostgreSQL_)
- [ ] [FastAPI and Pydantic - Intro](https://sqlmodel.tiangolo.com/tutorial/fastapi/)
- [ ] [SQLAlchemy - Basic Relationship Patterns](https://docs.sqlalchemy.org/en/14/orm/basic_relationships.html)

## 5. Design the "moovie" API

Take a look at this [diagram]( https://drive.google.com/open?id=1oecuuhaecnH4TNOpXp3Q8St0PQ6Am2L0) (open it with StarUML):

Based on that model, design an API that supports the following operations:

Movies:
- [ ] List movies (supporting paging, filtering, and sorting)
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
- [ ] Get genres.

User profile:
- [ ] Get user profile
- [ ] Update user profile
- [ ] Upload user photo
- [ ] Remove user photo

For each one of the above operations, you should specify:
- HTTP method
- HTTP path
- path parameters
- query parameters parameters
- Possible HTTP response codes
- Success response schema
- Error response schema

_NOTE: Don't design for authentication / authorization in mind. These topics will be covered later._

## 5. Basic CRUD and common relationship

- [ ] Read [one model with fastApi](https://sqlmodel.tiangolo.com/tutorial/fastapi/read-one/)
- [ ] Read model with [Limit and offset](https://sqlmodel.tiangolo.com/tutorial/fastapi/limit-and-offset/)
- [ ] [Update data](https://sqlmodel.tiangolo.com/tutorial/fastapi/update/) with fastApi
- [ ] [Delete data](https://sqlmodel.tiangolo.com/tutorial/fastapi/delete/) with fastApi
- [ ] Read about [common relationships](https://docs.sqlalchemy.org/en/14/orm/basic_relationships.html#one-to-many)
- [ ] Allow [Cascade behavior on relationship](https://docs.sqlalchemy.org/en/14/orm/cascades.html)

## 6. Filtering and sorting
- [ ] [Filtering and sorting](https://docs.sqlalchemy.org/en/14/orm/query.html)
- [ ] [Pagination](https://uriyyo-fastapi-pagination.netlify.app/)

## 7. Implement the first endpoint of the "moovie" API

- [ ] Read [Bigger Applications - Multiple Files](https://fastapi.tiangolo.com/tutorial/bigger-applications/) and apply it to the "moovie" app.
- [ ] Start a new FastAPI project
- [ ] Following the model design in card number 5, implement the API endpoints for Users and Lists

_NOTE: Use PostgreSQL._

## 8. Write tests

- [ ] Read [Testing](https://fastapi.tiangolo.com/tutorial/testing/)
- [ ] [Setup Database for run tests](https://fastapi.tiangolo.com/advanced/testing-database/)
- [ ] [Make rollback after run tests](https://itnext.io/setting-up-transactional-tests-with-pytest-and-sqlalchemy-b2d726347629)
- [ ] Write tests for the API's endpoints

## 9. Implement movies related endpoints

- [ ] List movies (supporting paging, filtering, and sorting)
- [ ] CRUD for movies

_NOTE: This includes adding models, routes, and tests._


## 10. Authentication

- [ ] Investigate about [JWT](https://jwt.io/introduction)
- [ ] Check out and keep as a reference [FastAPI Security](https://fastapi.tiangolo.com/tutorial/security/)
- [ ] Implement an endpoint for sign in, that responds with a JWT token
- [ ] Write tests

## 11. Implement user profile endpoints.

- [ ] Get user profile
- [ ] Update user profile

Notes:

 - This includes adding models, routes, and tests
 - Endpoints should read the JWT token sent by the client, and authorize the user
   based on the token

## 12. Implement the lists endpoints

- [ ] Create list
- [ ] Get list
- [ ] Update list
- [ ] Delete list
- [ ] Add movie to list
- [ ] Remove movie from list

_NOTE: This includes adding models, routes, and tests._
