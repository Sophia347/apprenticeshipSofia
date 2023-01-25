# Ruby on Rails API

Design and implement a REST API using Rails API

## 1. Getting Started with Rails
*Get fundamental Ruby on Rails concepts*

- [ ]  Follow [Rails official tutorial](http://guides.rubyonrails.org/getting_started.html)
- [ ] Read sections 1 and 2 from [Using Rails for API-only Applications](https://guides.rubyonrails.org/api_app.html)

--
Additional resources:
- [ ] Check [Ruby on Rails Docs](https://api.rubyonrails.org/) and keep it as a reference

## 2. Learn REST

Learn the basics about REST using this [REST API Tutorial](https://restfulapi.net/).

Read the following sections / topics:
- [ ] Learn REST (the whole section)
- [ ] Idempotence
- [ ] Put vs Post

## 3. Design the "moovie" API

Take a look at this [diagram](https://drive.google.com/open?id=1oecuuhaecnH4TNOpXp3Q8St0PQ6Am2L0) (use StarUML to open it)

Based on that model, design an API that supports the following operations:

Movies
- [ ] List movies (support paging, filtering, and sorting)
- [ ] Get movie

Lists
- [ ] Get user lists
- [ ] Create list
- [ ] Show list
- [ ] Update list
- [ ] Delete list
- [ ] Add movie to list
- [ ] Remove movie from list

Genres
- [ ] Get genres

User Profile
- [ ] Get user profile
- [ ] Update user profile
- [ ] Upload user photo
- [ ] Remove user photo

For each one of the above operations, you should specify:
- HTTP method
- HTTP path
- Path parameters
- Query parameters parameters
- Possible HTTP response codes
- Success response schema
- Error response schema

NOTE:
Don't design with authentication / authorization in mind. These topics will be covered later.


## 4. Implement the first endpoint

- [ ] Start new Rails project
- [ ] Implement "Get genres" operation. This includes adding migrations, seeds, models, routes, and tests.

Before starting check:
- [ ] [Rails Style Guide](https://github.com/rubocop-hq/rails-style-guide)

***Notes***
* Use [RSpec](https://github.com/rspec/rspec-rails) for tests
* Use PostgreSQL


## 5. Implement movies endpoints

- [ ] List movies (supporting paging, filtering, and sorting)
- [ ] Get movie

## 6. Add authentication

- [ ] Investigate about JWT
- [ ] Check [devise](https://github.com/plataformatec/devise) gem
- [ ] Investigate how to use it in the context of an API together with JWT. Check existent devise related gems that handle this behavior.
- [ ] Implement login endpoint. Login endpoint should respond with a JWT token.
- [ ] Write a script to add a user and its credentials to the database


## 7. Implement first user's endpoint

User's endpoints must check that a valid JWT token comes with the HTTP request.

If JWT token is invalid, user's endpoint should respond with accordingly.

A user shouldn't access and modify other users data.

- [ ] Get user's lists


## 8. Implement the rest of lists endpoints

- [ ] Create list
- [ ] Show a list
- [ ] Update list
- [ ] Delete list
- [ ] Add movie to list
- [ ] Remove movie from list

## 9. Implement user's profile endpoints

- [ ] Get user profile
- [ ] Update user profile
- [ ] Upload user photo
- [ ] Remove user photo

## 10. Additional Resources

This card contains a list of additional resources that you might find useful, to follow
your journey in the future.

* [Dev.to](https://dev.to/)
* [Ruby Weekly](https://rubyweekly.com/)
* [Rails API](https://rails-api.org/)
* [Rails Tutorial](https://www.railstutorial.org/)
