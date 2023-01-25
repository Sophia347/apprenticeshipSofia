# Python REST API

Build a REST API in Python

## 1. Django

Follow the [Django](https://www.djangoproject.com/) tutorial and write your first Django app.
- [ ] [Install Django and set up a database](https://docs.djangoproject.com/en/3.0/intro/install/).
- [ ] [Create a project and an app](https://docs.djangoproject.com/en/3.0/intro/tutorial01/).
- [ ] [Models & Migrations](https://docs.djangoproject.com/en/3.0/intro/tutorial02/).
- [ ] [Views](https://docs.djangoproject.com/en/3.0/intro/tutorial03/).
- [ ] [Generic Views](https://docs.djangoproject.com/en/3.0/intro/tutorial04/).
- [ ] [Testing](https://docs.djangoproject.com/en/3.0/intro/tutorial05/).

## 2. Learn REST

Learn the basics about REST (https://restfulapi.net/).

Read the following sections / topics:
- [ ] Learn REST (the whole section).
- [ ] Idempotence.
- [ ] Put vs Post.

Also, check out and keep as a reference [Best Practices for Designing a Pagmatic RESTful API](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api).

## 3. Django REST Framework
[Django REST Framework](https://www.django-rest-framework.org/)'s (DRF) website has an in-depth tutorial as well as great documentation.

Follow DRF’s official tutorial, which covers the main features of the framework.

- [ ] Start a new project using poetry.
- [ ] [Serialization](https://www.django-rest-framework.org/tutorial/1-serialization/).
- [ ] [Requests & Responses](https://www.django-rest-framework.org/tutorial/2-requests-and-responses/).
- [ ] [Classs-based Views](https://www.django-rest-framework.org/tutorial/3-class-based-views/).
- [ ] [Authentication & Permissions](https://www.django-rest-framework.org/tutorial/4-authentication-and-permissions/).
- [ ] [Relationships & Hyperlinked APIs](https://www.django-rest-framework.org/tutorial/5-relationships-and-hyperlinked-apis/).
- [ ] [ViewSets & Routers](https://www.django-rest-framework.org/tutorial/6-viewsets-and-routers/).

Check out and keep as a reference [Classy Django REST Framework](http://www.cdrf.co/)

## 4. DRF Testing

Read the following resources:
- [ ] [DRF Testing](https://www.django-rest-framework.org/api-guide/testing).
- [ ] [How to Develop APIs with Django REST Framework](https://djangostars.com/blog/rest-apis-django-development/) is a DRF tutorial that covers topics already seen but using a TDD. It has useful examples of testing and documenting in DFR.
- [ ] [Testing for Django Rest Framework with Factory Bot and Faker](https://ruddra.com/posts/tdd-drf-factory-boy-faker/).

Implement unit tests in your tutorial's application.
- [ ] Implement tests for the models.
- [ ] Implement tests for the API.

## 5. Design the "moovie" API

Take a look at this [diagram]( https://drive.google.com/open?id=1oecuuhaecnH4TNOpXp3Q8St0PQ6Am2L0) (open it with StarUML):

Based on that model, design an API that supports the following operations:

Movies:
- [ ] List movies (supporting paging, filtering, and sorting).
- [ ] Get movie.

Lists:
- [ ] Get user lists.
- [ ] Create list.
- [ ] Get list.
- [ ] Update list.
- [ ] Delete list.
- [ ] Add movie to list.
- [ ] Remove movie from list.

Genres:
- [ ] Get genres.

User profile:
- [ ] Get user profile.
- [ ] Update user profile.
- [ ] Upload user photo.
- [ ] Remove user photo.

For each one of the above operations, you should specify:
- HTTP method.
- HTTP path.
- path parameters.
- query parameters parameters.
- Possible HTTP response codes.
- Success response schema.
- Error response schema.

NOTE: Don't design for authentication / authorization in mind. These topics will be covered later.

## 6. Implement the first endpoint of the "moovie" API

- [ ] Read [Structuring Your Project#Regarding Django Applications](https://docs.python-guide.org/writing/structure/#regarding-django-applications) and apply it for the "moovie" app.
- [ ] Create a new Django project and a new Django app.
- [ ] Implement "Genres" views. This includes adding migrations, models, routes, and tests.

## 7. Implement movies views

- [ ] List movies (supporting paging, filtering, and sorting).
- [ ] CRUD for movies.

Note: This includes adding migrations, models, routes, and tests.

## 8. Authentication

- [ ] Investigate about JWT
- [ ] Check out and keep as a reference [DRF Authentication](https://www.django-rest-framework.org/api-guide/authentication/).
- [ ] Install [djangorestframework-simplejwt](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/index.html) in your project, skim through the documentation and keep it as a reference.
- [ ] Implement `sign_up` and `sign_in` endpoints.
- [ ] Implement email verification for new users.

## 9. Implement the rest of lists endpoints

- [ ] Create list.
- [ ] Get list.
- [ ] Update list.
- [ ] Delete list.
- [ ] Add movie to list.
- [ ] Remove movie from list.

Note: This includes adding migrations, models, routes, and tests.

## 10. Implement user profile endpoints.

- [ ] Get user profile.
- [ ] Update user profile.
- [ ] Upload user photo.
- [ ] Remove user photo.

Note: This includes adding migrations, models, routes, and tests.
