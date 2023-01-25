# React

Learn about React, redux, testing, and enjoy doing a fun project

## 1. Basics

Learn the basics about React and the ecosystem around it, read s the [Introduction to React](https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/) following the next order:

- [ ] An introduction to react
- [ ] How to use create-react-app
- [ ] React concepts
- [ ] In-depth react
- [ ] Practical examples
- [ ] Styling
- [ ] Tooling

## 2. Style Guide & Best Practices

Learn about the styles and best practices that are applied by the community

- [ ] Read [Airbnb Style Guide](https://github.com/airbnb/javascript/tree/master/react)

## 3. Use a linter

*Write code using a consistent style*

- [ ] Use [create-react-app](https://github.com/facebook/create-react-app) tool to start
- [ ] Apply the following instructions https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically
- [ ] Configure eslint  with `npx eslint --init`, you will be asked about the style guide, so please make sure to select the airbnb style guide.
- [ ] Create some dummy components
- [ ] Run the linter and fix any warnings and errors


## 4. Make a small Netflix

Using React create a website that lists movies.

* Inspire on the following [designs](https://www.figma.com/file/F2b2DAdACQitx1MX8oyF8W/Movy-%5BWeb%5D)
* Use [tailwindcss](https://tailwindcss.com/)
* For the API you should use the one you built previously on the apprenticeship or [The Movie Database API](https://www.themoviedb.org/documentation/api) if you haven't built one

#### Features

- [ ] List all movies coming from the API
- [ ] Design should be responsive

#### Notes

- [ ] Use Function Components
- [ ] Use Hooks

#### Docs

- [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)
- [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)

## 5. Unit Testing

Acquire knowledge about unit testing in React and testing in general.

Read about:

- [ ] [Unit Testing](https://medium.com/@lazlojuly/how-to-get-started-with-unit-testing-part-1-7f490bbf560a)
- [ ] [Using Jest](https://jestjs.io/docs/en/tutorial-react)
- [ ] [Mocking with Jest](https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c)
- [ ] [Using testing library](https://testing-library.com/docs/react-testing-library/intro/)
- [ ] [Testing library best practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

#### Tasks

- [ ] Add unit testing to our application
- [ ] Utilize [`testing-library`](https://www.npmjs.com/package/@testing-library/react)

## 6. Add movie trailer page

Acquire knowledge about routing in React.

- [ ] Read about [React Router](https://reacttraining.com/react-router/)

#### Features
- [ ] Clicking on each movie should redirect the user to a new page where the trailer of the movie is displayed automatically

## 7. Additional Material

Acquire additional knowledge about the React ecosystem and what are the best practices on the structure of this kind of projects.

Read the following articles:
- [ ] [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
- [ ] [9 things every React.js beginner should know](https://camjackson.net/post/9-things-every-reactjs-beginner-should-know)
- [ ] [State is an antipattern](https://www.reddit.com/r/reactjs/comments/3bjdoe/state_is_an_antipattern/)
- [ ] [State Architecture Patterns in React: A Review](https://medium.com/@skylernelson_64801/state-architecture-patterns-in-react-a-review-df02c1e193c6)

## 8. Redux

Acquire knowledge about redux and how to integrate it into your react project.

- [ ] Read the following sections of [Introduction to Redux](https://redux.js.org/introduction/getting-started):
    - Introduction
     - Installation
     - Core Concepts
     - Three Principles
     - Ecosystem
     - Examples
- [ ] Watch the following video https://egghead.io/courses/getting-started-with-redux (requires sign in).
- [ ] Read about [React Redux](https://react-redux.js.org/introduction/quick-start)

## 9. Integrate Redux

#### Tasks / Features
- [ ] Integrate React Redux into our application.
- [ ] On the trailer page the user should be able to go back to the movies listing page. If the movies data is already loaded we should use it instead of getting it again from the API
- [ ] Write tests for the reducers

## 10. End to end Testing

- [ ] [Testing microservices](https://medium.com/techlogs/sw-quality-and-testing-in-microservices-e7afcef1f851)
- [ ] [Scalable E2E Tests](https://medium.com/bluecore-engineering/how-we-built-scalable-end-to-end-tests-e5aab3eb5e28)
- [ ] cypress.io:
   - [ ] [Overview](https://docs.cypress.io/guides/overview/why-cypress.html)
   - [ ] [Cypress with async await](https://medium.com/@NicholasBoll/cypress-io-using-async-and-await-4034e9bab207)

#### Tasks

- [ ] Add e2e testing to our application

## 11. Integrate authentication

Read about:

- [ ] [Authentication in SPAs](https://medium.com/@jcbaey/authentication-in-spa-reactjs-and-vuejs-the-right-way-e4a9ac5cd9a3)

#### Tasks / Features

- [ ] Integrate authentication into our application
- [ ] Add Sign In page

#### Notes

- If you are using the TMDB API, use the autentication mechanism provided by that API.
  Find the documentation [here](https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id)

## 12. User profile & privacy page

#### Features

- [ ] Create a header that includes:
    - Picture of the user linking to *Profile* page
    - *Sign Out* link so the user can sign out from the site
- [ ] Create a Profile page
     - User can see and edit their personal information
     - NOTE: If you're using The Movie Database API, since it has not support for this, you can use local storage for storing profile related data
- [ ] Sign in screen changes
     - Sign in (Login) page should be available from two perspectives: signed in users & signed out users.
     - Signed out users should see the form as per the designs
     - Signed in users should see "Continue to home" and "Logout" buttons in the place of the "Login" form/button

## 13. User features

#### Features
- [ ] Allow users to save movies as favorites
- [ ] Display the list of favorites movies on the home page
- [ ] Maintain a list of the movies that the user already saw and display that list on the home page

## 14. Additional Resources

This card contains a list of additional resources that you might find useful, to follow
your journey in the future.

* [Dev.to](https://dev.to/)
* [Scrimba](https://scrimba.com/)
* [React Weekly](https://reactnewsletter.com/)
