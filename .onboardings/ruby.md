# Ruby

Learn about Ruby and apply it by doing a small project

## 1. Get in touch with Ruby

Follow this Ruby quick-start guide: [Ruby in Twenty Minutes](https://www.ruby-lang.org/en/documentation/quickstart/)

## 2. Install environment

- [ ] Install [rbenv](https://github.com/rbenv/rbenv)
- [ ] Install latest Ruby version, using rbenv
- [ ] Install [bundler](https://bundler.io/)

## 3. Ruby Basics

- [ ] Follow [Basic Ruby](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/ruby#basic-ruby) to learn about Ruby primitives, Ruby built-in methods, iterators and flow control


## 4. Ruby intermediate

Learn about:

- [ ] [Object Oriented Programming](
https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/ruby-programming/lessons/object-oriented-programming-ruby-programming)
- [ ] [Serialization and how to interact with files](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/ruby-programming/lessons/files-and-serialization-ruby-programming)

## 5. Exercise - Part 1

Build a program that receives a filename and uploads the file as a gist into GitHub

Additionally, the script should:
- Print gist’s url when upload finishes
- If a connection error occurs, give the user an option to retry.

Before starting check:
- [ ] [Ruby style guide](https://github.com/bbatsov/ruby-style-guide#prelude)

--
References:
- [GitHub REST API v3 / Gists](https://developer.github.com/v3/gists/)


## 6. Exercise - Part 2

Modify the program you created in the previous step to allow receiving either a filename or a dirname.

If a dirname is provided all the files in the directory (including sub-directories) should be uploaded as part of the same gist.

--

*HINT: Github's gists do not have a "directory" or "folder" concept, so you will need to think on a way to represent that in the name of each gist file*

--
References:
- [GitHub REST API v3 / Gists](https://developer.github.com/v3/gists/)


## 7. Testing Ruby

- [ ] Follow [Test Driven Development section](https://www.theodinproject.com/lessons/ruby-test-driven-development) to learn how to test what you build
- [ ] Follow [Introduction to RSpec](https://www.theodinproject.com/lessons/ruby-introduction-to-rspec) to learn how can you use it to test your code

## 8. Exercise - Part 3

Add code documentation and tests to the program your created in the previous Ruby exercise.

Use Yard for code documentation, and Rspec for writing tests.

Before starting check:
- [ ] [Getting Started with YARD](http://www.rubydoc.info/gems/yard/file/docs/GettingStarted.md)
- [ ] [Better Specs { rspec guidelines with ruby }](http://www.betterspecs.org/)

--
References:
- [Yard Tags Overview](http://www.rubydoc.info/gems/yard/file/docs/Tags.md)
- [RSpec docs](https://www.relishapp.com/rspec/)

## 9. Additional Resources

This card contains a list of additional resources that you might find useful, to follow
your journey in the future.

* [Dev.to](https://dev.to/)
* [Ruby Weekly](https://rubyweekly.com/)
* [Rails API](https://rails-api.org/)
* [Rails Tutorial](https://www.railstutorial.org/)
