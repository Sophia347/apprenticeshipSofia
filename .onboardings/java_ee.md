# Java EE Project

A general onboarding process for Java EE projects

## 1. Install the required tools

- [ ] JDK 8
- [ ] Intellij IDEA, Community Edition
- [ ] Postman
- [ ] Git _(The latest version, if you followed the git on boarding you already have it installed)_

## 2. Essential Java 8 readings

- [ ] Lambda functions
- [ ] Streams
- [ ] Optional<T>
- [ ] Interfaces with implementation

Here you'll find a good introductory article: https://www.baeldung.com/java-8-new-features

## 3. Readings related to the frameworks and libraries

- [ ] [Swagger](https://swagger.io/tools/open-source/getting-started/)
- [ ] [Maven](https://www.baeldung.com/maven)
- [ ] [TestNG](https://www.baeldung.com/testng)
- [ ] [Mockito](https://www.baeldung.com/mockito-series)

## 4. Project introduction

- [ ] Have 1 ~ 2 hours meeting with a teammate. She/he will tell you about the client, project, and business domain
- [ ] Read the Product Overview documentation
- [ ] Read about project’s domain
- [ ] Read the Development Environment Setup guide
- [ ] Learn how to build and run the development server
- [ ] Learn how to smoke test the API


## 5. First coding task
(bold options must be defined by your mentor before start)
Create a **single | multi** module application.
Input:
```json
[{ 
  "id": uuid
  "category": common, uncommon, rare, epic or legendary
  "updateDate": timestamp in millis,
  "entries": uuid array
}]
```
Do the following 
 - Receive input **from an exposed api or pull from filesystem or an external api** in **json or xml** format    
 - Fetch a label for the entity from **an api, a database or filesystem**. Use id and category as key
 - Discard records if a label is missing, an id is invalid (not uuid), category is invalid, updateDate is older than the record stored if any or invalid entries
 - Store entities using **an api, a database or filesystem** using **async responses and/or batches**      
Support execution tracking for individual records using **logs or reports**
Support throttling. Be able to modify resource consumption
Apply **java#, spring #, aws, maven, ...** 
Create tasks before start
