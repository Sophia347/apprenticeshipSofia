# Node.js API

Design and implement a REST API in Node.js

## 1. Learn REST

Learn the basics about REST (https://restfulapi.net/).

Read the following sections / topics:
- [ ] Learn REST (the whole section)
- [ ] Idempotence
- [ ] Put vs Post

## 2. Design the "moovie" API

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
- [ ] Get genres

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

NOTE: Don't design for authentication / authorization in mind. These topics will be covered later.


## 3. Implement the first endpoint of the "moovie" API

- [ ] Clone https://github.com/moove-it/node-rest-template and follow bootstrap instructions
- [ ] Read the source code of that skeleton project and get a sense of the overall architecture
- [ ] Push that codebase to the created repository.
- [ ] Implement "Get genres" operation. This includes adding migrations, seeds, models, routes, and tests.

## 4. Implement movies endpoints

- [ ] List movies (supporting paging, filtering, and sorting)
- [ ] Get movie

## 5. Add authentication

- [ ] Investigate about JWT
- [ ] Check [Authentication section](https://github.com/moove-it/node-rest-template/blob/master/lib/authentication.md) on the template documentation
- [ ] Follow the instructions for configuring everything needed and adding a login endpoint
- [ ] Write a script to add a user and its credentials to the database


## 6. Implement first user's endpoint

User's endpoints must check that a valid JWT token comes from the HTTP request.

If JWT token is invalid, user's endpoint should respond with the appropriate response.

A user shouldn't access/modify other users data.

- [ ] Get user's lists


## 7. Implement the rest of lists endpoints

- [ ] Create list
- [ ] Get list
- [ ] Update list
- [ ] Delete list
- [ ] Add movie to list
- [ ] Remove movie from list


## 8. Implement user's profile endpoints

- [ ] Get user profile
- [ ] Update user profile
- [ ] Upload user photo
- [ ] Remove user photo


## 9. Additional Resources

This card contains a list of additional resources that you might find useful, to follow
your journey in the future.

* [Dev.to](https://dev.to/)
* [Scrimba](https://scrimba.com/)
* [JavaScript Weekly](http://javascriptweekly.com/)
* [Node.js Weekly](http://nodeweekly.com/)
