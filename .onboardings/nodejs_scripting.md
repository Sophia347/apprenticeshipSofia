# Node.js Scripting

Node.js scripting onboarding

## 1. Install environment

- [ ] Install [nvm](https://github.com/creationix/nvm/)
- [ ] Install latest node.js version, using nvm

## 2. Node.js scripting
*Write and run simple node.js script*

Implement a node.js script that receives a regular expression and prints all of the files that whose filename match the given regular expression under the current directory (recursively)


#### Example

```
node fs-scan.js '\.js$'
```


#### Output
```
./node_modules/json-schema/test/tests.js
./node_modules/json-schema/lib/links.js
./node_modules/json-schema/lib/validate.js
./src/lib/tron/redux-tron.js
```
--
References:
- https://nodejs.org/api/fs.html

## 3. Use a linter
*Write code using a consistent style*

- [ ] Install [eslint](https://eslint.org/), [prettier](https://prettier.io/), [husky](https://typicode.github.io/husky)
- [ ] Configure .eslintignore, .eslintrc.js, and .prettierrc.js
- [ ] Configure husky to run the `npm run lint` on pre-commit
- [ ] Run the linter and fix any warnings and errors


## 4. Build a node.js tool

*Create a tool to list GitHub projects*

Implement a node.js tool that given a source GitHub repository, lists the name of the projects and the tasks within those projects.

Format the output in some way that will help a user to see projects and their tasks at a glance.

--
References:

- [GitHub REST API v3 / Projects](https://developer.github.com/v3/projects/)
- [Learn the basics about REST](https://restfulapi.net/)

## 5. Extend the tool to filter projects

*Add the ability to filter the list of projects to the tool built on the previous task.*

Extend the tool to receive an optional parameter, that will be a regular expression. Then list the projects that match that pattern.

--
References:

* [GitHub REST API v3 / Projects](https://developer.github.com/v3/projects/)


