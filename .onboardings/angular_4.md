# Angular 4

Learn from the basics to best practices about *Angular 4* and typescript

## Basics

- [ ] Follow the course about angular https://scrimba.com/g/gyourfirstangularapp

## Angular CLI

**Learn about how to use the Angular CLI and what you can do with it**

- [ ] Read the basics about the Angular CLI (https://cli.angular.io/)
- [ ] Read tips about the Angular CLI (https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81)

## Styles Guides & Best Practices

**Learn about the styles that are suggested by the angular team**

- [ ] Read the angular styles guide (https://angular.io/guide/styleguide)
- [ ] Read about best practices in Angular development (https://medium.com/@stephenfluin/angular-best-practices-august-2017-edition-690b75cf8232)

## Make a small Netflix

Create a website using Angular 4 that list of movies and that you can click on each movie and see a trailer of that movie. Create components and services as needed (try to modularize). The movies that the user saw should be stored in the browser local store

**Google for a movies API to be used on the project**

### Features Required

- [ ] List all movies coming from an API
- [ ] Styles should be similar to Netflix styles, but using the CSS knowledge obtained on the Basic module
- [ ] Clicking on each movie should redirect the user to a new page where the trailer of the movie is displayed automatically

## Testing

**Acquire knowledge about testing in angular and testing in general**

- [ ] Read about Unit Testing (https://medium.com/@lazlojuly/how-to-get-started-with-unit-testing-part-1-7f490bbf560a)
- [ ] Read about e2e tests (https://medium.com/techlogs/sw-quality-and-testing-in-microservices-e7afcef1f851, https://medium.com/bluecore-engineering/how-we-built-scalable-end-to-end-tests-e5aab3eb5e28)
- [ ] Read about cypress.io (https://docs.cypress.io/guides/overview/why-cypress.html, https://medium.com/@NicholasBoll/cypress-io-using-async-and-await-4034e9bab207)
- [ ] Read about testing in angular (https://angular.io/guide/testing)

## Add testing to our Netflix app

Apply the knowledge you learn on the Testing section to the Netflix app (unit testing and e2e testing using cypress)

- [ ] Add unit testing to all the components created
- [ ] Add e2e testing to the main components on the application

## Best Practices (jslint)

It is important to have some kind of standards on our code, this is important to follow the same rules when coding and fell that code was "written only for one person" 

- [ ] Learn the basics about jslint
- [ ] Learn about jslint with angular (https://www.npmjs.com/package/eslint-plugin-angular)
- [ ] Integrate js lint with the netflix application
- [ ] Fix all the issues that came from the lint

## Integrate GraphQL into the Netflix application

**Learn basics about GraphQL**

- [ ] Basics about GraphQL (https://graphql.org/learn/)
- [ ] Integration between angular and GraphQL (https://medium.com/codingthesmartway-com-blog/apollo-client-for-angular-making-use-of-graphql-8d9a571e020c)

**Use what you just learned**

- [ ] Integrate GraphQL into the project
- [ ] Add the ability to find movies using GraphQL
- [ ] Add likes to the schema (a random number) and include that information on your frontend



## User authentication

Is important to keep the user preference separated from other user's preferences, and to add their own identity to each of our users on the system. To do that we should add an authentication layer to the project.

- [ ] Add authentication to our application using Auth0 (https://auth0.com/docs/quickstart/spa/angular2/01-login)
- [ ] Restrict the user access to the movie list and the trilers
- [ ] Create two public pages "Terms of Service" and "FAQ" those pages should be accessed even if the user is not authenticated
- [ ] The layout of those two new pages should be different depending on the user authentication (if the user is logged in it should see the menu with the ability to logout, if it's not it should see a similar layout to the splash page)
