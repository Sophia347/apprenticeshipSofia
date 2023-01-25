# Ruby on Rails

Learn about Ruby on Rails and apply that knowledge by doing a small project

## 1. Getting Started with Rails

*Get fundamental Ruby on Rails concepts*

- [ ]  Follow [Rails official tutorial](http://guides.rubyonrails.org/getting_started.html)

--
Additional resources:

- [ ] Check [Ruby on Rails Docs](https://api.rubyonrails.org/) and keep it as a reference
- [ ] Read [The Rails Style Guide](https://github.com/rubocop-hq/rails-style-guide#prelude)

## 2. Make a small Netflix - Part 1

Create a web application using Ruby on Rails that lists movies and allows users to see a trailer of that movie

Inspire on the designs proposed on the following [designs](https://www.figma.com/file/F2b2DAdACQitx1MX8oyF8W/Movy-%5BWeb%5D)

#### Preparation tasks

- [ ] Create a Rails app
- [ ] Create the Rails models that would cover the features listed in this card and in the provided designs
- [ ] Insert sample data (based on actual movies data) into the development database

#### Features

- [ ] List all movies
- [ ] Clicking on each movie should redirect the user to a new page where the trailer of the movie is displayed automatically

#### Other tasks
- [ ] Read [Testing Rails Applications](https://guides.rubyonrails.org/testing.html)
- [ ] Add tests. Use [RSpec](https://github.com/rspec/rspec-rails)

## 3. Use HAML

HAML is a template engine for Ruby. Learn about HAML and start using it.

- [ ] Follow the [HAML Tutorial](https://haml.info/tutorial.html)
- [ ] Migrate to HAML Movies List page of the Netflix web app you are building

_Note: Use HAML for the rest of the tasks of this on-boarding._

#### Additional Resources

- [HAML Reference](https://haml.info/docs/yardoc/file.REFERENCE.html)


## 4. Make a small Netflix - Part 2

Add authentication to our app.

- Inspire on the designs proposed for the needed pages
- Use [devise gem](https://github.com/plataformatec/devise)

#### Features
- [ ] Implement Login (only user / password mechanism)
- [ ] Implement Register. Send an email with confirm instructions
- [ ] Implement Reset password. Send an email with password reset instructions

## 5. Make a small Netflix - Part 3

Add header to our app together with Profile page, sign out ability and TOC & Privacy Policy section.

#### Features
- [ ] Create the header bar with a picture of the user and a menu with the following options:
  - *Profile* where the user can see and edit their name and password
  - *Sign Out* where the user can sign out from the site
- [ ] Create TOC & Privacy Policy
   - This page should be available from two perspectives signed in users & signed out users


## 6. Make a small Netflix - Part 4

Add some new user's features

#### Features
- [ ] Allow users to save movies as favorites
- [ ] Display the list of favorites movies on the home page
- [ ] Create a list of the movies that the user already saw and display that list on the home page

## 7. Additional Resources

This card contains a list of additional resources that you might find useful, to follow
your journey in the future.

* [Dev.to](https://dev.to/)
* [Ruby Weekly](https://rubyweekly.com/)
* [Rails API](https://rails-api.org/)
* [Rails Tutorial](https://www.railstutorial.org/)
