# Flutter Onboarding

Welcome to the Flutter onboarding! This series of tasks will guide you through the path of becoming a Flutter developer. This onboarding is under constant revision and will be updated in the near future.

### Pre-requisites
Make sure you have completed the basic onboarding before moving forward. 
- [ ] Complete the [Basic onboarding](./basic.md).

## 1. Hello World, Dart.
To learn Flutter, you must first learn the basic concepts of Dart.
Dart is the foundation of Flutter apps, and its syntax may feel somewhat familiar to those coming from any other object-oriented programming language. 

- [ ] Get started with [Dart samples](https://dart.dev/samples) to get a quick feel of the Dart language and its syntax.
- [ ] [Take a language tour](https://dart.dev/guides/language/language-tour). This is a quite extensive reading, so let's focus on the sections that matter the most:
  - A basic Dart Program
  - Important concepts
  - Variables
  - Built-in types (numbers, strings, booleans, lists, maps)
  - Functions (parameters, lexical scope)
  - Control flow statements (if/else, for loops)
  - Exceptions
  - Classes (using class members, using constructors, instance variables, constructors, abstract class, extending a class)

- [ ] Learn about [asynchronous programming](https://dart.dev/codelabs/async-await) and [null safety](https://dart.dev/codelabs/null-safety) on Dart. An important part of the development is based on these two concepts, so read this thoroughly.

## 2. Dart exercises
Let's write some Dart code! Using [DartPad](https://dartpad.dev/) you can play with the Dart language online without needing SDK installation. Use it to complete the following exercises.
 - [ ] Implement the `void printList(List<int> list)` function that receives a numeric list as a parameter and prints every item of the list on the console.
 - [ ] Implement the `List<int> filter(List<int> list, num n)` function that prints every item of the numeric `list` passed as parameter that is greater than or equal to `n`. 
 - [ ] Create a class `Pair` with the following requirements:
   -  Two numeric attributes called `x` and `y`, where `x` is nullable and `y` is initialized in `0` and non-nullable.
   -  A default constructor that takes both `x` and `y` as parameters.
   -  A named constructor called `fromX` that takes only `x` as a parameter.
   -  A custom `getter` function that returns `x + y`.
   -  A custom `setter` function that sets a value for `x`.
 - [ ] Let's use our newly created class: create two instances of `Pair` (one of them using the default constructor, the other one using the named constructor).
 - [ ] Modify your implementation of `filter` to work only with `List<Item>`. This function should print every `x` value of the list that is greater than or equal to `n`. For instance: `List<Item> items = [Item(3,2), Item(7,2), Item(9,4)] and n = 5` should print `7 9`.
 - [ ] Discuss your complete solution with your mentor. Where should you use a named constructor over a default constructor? 


##  3. Getting started with Flutter 
We'll need to install a few things before starting with Flutter.

- [ ] Install [Flutter SDK](https://docs.flutter.dev/get-started/install/macos) by following this guide. You can also follow this guide to install Android Studio and Xcode, and to configure them to run Flutter.

- [ ] Install the official Visual Studio Code [extension](https://docs.flutter.dev/development/tools/vs-code).

> 💡 Although we suggest using Visual Studio Code, you can optionally use Android Studio to develop Flutter apps. There is an official Flutter plugin for Android Studio available [here](https://docs.flutter.dev/development/tools/android-studio).

- [ ] Make sure that the command `flutter run` properly launches the test app on both Android and iOS simulators.
> 💡 Get familiar with the available learning resources. Flutter has a [beautiful documentation](https://docs.flutter.dev/) and a super-useful [YouTube Playlist](https://www.youtube.com/watch?v=4AoFA19gbLo&list=PLjxrf2q8roU3wk7CDw4RfV3mEwOJbjx1k&ab_channel=Flutter) with a growing collection of educational videos. Keep those in mind, as you would probably use them quite a lot from now on.

##  4. Building your first app
Let's start by learning to build the first piece of layout using Flutter. Pay special attention to these lectures, since Flutter layout is very different from an HTML-based layout.
- [ ] Watch: [Introduction to making Flutter apps](https://www.youtube.com/watch?v=xWV71C2kp38&list=PLjxrf2q8roU3wk7CDw4RfV3mEwOJbjx1k&index=2&ab_channel=Flutter)
- [ ] Read: [Introduction to Widgets](https://docs.flutter.dev/development/ui/widgets-intro)
- [ ] Read: [Layouts in Flutter](https://docs.flutter.dev/development/ui/layout)
- [ ] Watch: [How to Create Stateless Widgets](https://www.youtube.com/watch?v=wE7khGHVkYY&ab_channel=GoogleDevelopers)
- [ ] Read: [Adding assets and images](https://docs.flutter.dev/development/ui/assets-and-images)

>💡 Optional: Flutter is all about widgets. Explore Flutter's Widget of the Week [Youtube Playlist](https://www.youtube.com/playlist?list=PLjxrf2q8roU23XGwz3Km7sQZFTdB996iG) and the [Widget Catalog](https://docs.flutter.dev/development/ui/widgets).


### Coding Challenge: Introduction
Let's toy around with Flutter with what we know so far! The coding challenges were created to put into practice the Flutter concepts that are being introduced in the lectures. In this challenge, we will create a small Netflix-like mobile application that consumes data from [The Movie DB API](https://developers.themoviedb.org/3). We already have a design mock for this app that you can find [here](https://www.figma.com/file/gNP12kQqjDzSCyYmMiLu8F/Movy-Mobile).

Please bear in mind these tips to have a better understanding of what's being requested:
 - Always work on the same codebase: we expect this to be a **single** Flutter project that you will work on and therefore will be evolving across the different parts of the challenge.
 - Create a private, empty git repository and grant access to your mentor. Remember to follow our practices when submitting code for review.
 - Each screen in the [design mock](https://www.figma.com/file/gNP12kQqjDzSCyYmMiLu8F/Movy-Mobile) has a little label with the screen name (and sometimes a number) in the upper left corner. Locate that number, as we will identify the screens using that label.

### Coding Challenge I: Basic Layouts and Stateless Widgets
 - [ ] Create an empty Flutter project.
 - [ ] Push an initial commit to git (it should **only** contain the base project)
 - [ ] Create a folder called `screens` 
 - [ ] Decide which design system to use (`MaterialApp` or `CupertinoApp`). There's no correct answer here, so do some research first and find out which you like the most!
 - [ ] Implement the screen 01 ([Plan Selection - Design Mock](https://www.figma.com/file/gNP12kQqjDzSCyYmMiLu8F/Movy-Mobile?node-id=0%3A799)). Do NOT implement any other screen.
 - [ ] Wrap it up! Push your changes to git and ask your mentor to review your PR.

>💡 Optional: You can create your own folder structure to organize your widgets, assets, and/or themes.

## 5. Adding logic to widgets
It's time to make widgets intelligent. Watch and read this series of tutorials and find out how to do so.

- [ ] Read the following sections of [Adding interactivity to Widgets](https://docs.flutter.dev/development/ui/interactive):
  - Stateful and stateless widgets
  - Creating a stateful widget
- [ ] Watch: [What is State?](https://www.youtube.com/watch?v=QlwiL_yLh6E&list=PLjxrf2q8roU3wk7CDw4RfV3mEwOJbjx1k&index=4&ab_channel=Flutter)
- [ ] Watch: [How Stateful Widgets Are Used Best](https://www.youtube.com/watch?v=AqCMFXEmf3w&ab_channel=GoogleDevelopers)

## 6. Debugging
Flutter comes with a wide range of debugging tools. In this section, we are going to take a look at _DevTools_, which is a complete, built-in debugging solution that comes with Flutter.
- [ ] Read: [Debugging Flutter Apps](https://docs.flutter.dev/testing/debugging)
- [ ] Read: [DevTools](https://docs.flutter.dev/development/tools/devtools/overview)

>💡 Optional: Open DevTools in your coding challenge project. Play around a little so that you can get familiar with it!

## 7. Navigation
Now that we have dealt with logic and debugging, let's take a closer look at how Flutter resolves a fundamental part of the apps we know and use nowadays: navigation.

 - [ ] Read: [Navigation Basics](https://docs.flutter.dev/cookbook/navigation/navigation-basics)
 - [ ] Watch: [Flutter Routes & Navigation](https://www.youtube.com/watch?v=nyvwx7o277U&ab_channel=ResoCoder)

### Coding Challenge II: Logic and Navigation
- [ ] Implement the screen 02 ([Plan Selection 2 - Design Mock](https://www.figma.com/file/gNP12kQqjDzSCyYmMiLu8F/Movy-Mobile?node-id=0%3A686))
    - Only one plan selection item (Basic, Standard, Premium) should be selectable at once, and the background/icon colors should change accordingly given whether it's selected or not (just like the designs).
    - Implement navigation between this screen and screen 01.
    - There are many components that can be reusable.
- [ ] Implement the screen 04 ([Account Creation - Design Mock](https://www.figma.com/file/gNP12kQqjDzSCyYmMiLu8F/Movy-Mobile?node-id=0%3A859))
   - Screen 02's confirmation button should redirect to screen 04. Do NOT implement screen 03.
 - [ ] Push your changes to git and ask your mentor to review your PR.
  
>💡 Pro-Tip! You may find DevTools useful while developing these features.

## 8. State Management
There are several ways of achieving state management in Flutter. We even made a [discussion](https://mooveit.atlassian.net/wiki/spaces/STUD/pages/2217738241/Knowledge+Checklist#Picking-a-suitable-state-management-approach) about it not so long ago. We would want you to take a look at the different options that Flutter has put on the table.

The State Management is the implementation of a design pattern that allows us to synchronize a single (and sometimes normalized) application state throughout all components of the app.

 - [ ] Start by doing some research! Investigate the different state management approaches for Flutter, and discuss them with your mentor.

Let's talk about our preferred state management library: [BloC](https://bloclibrary.dev/#/).

 - [ ] Request Moove It's [Udemy](https://mooveit.udemy.com) credentials to @jeas, @sebapaz or the #mobilers channel.
 - [ ] Watch: [BloC course](https://mooveit.udemy.com/course/bloc-from-zero-to-hero/learn/lecture/25183780#overview) (12 videos).

>💡 This is a three-hour course that will help a lot to understand how this state management solution works and why it is considered the top pick by a significant part of the Flutter community. Take your time to grasp these concepts, even if that takes watching a lesson more than once. Get the code samples of each lesson and run them on your local environment. Focus on getting the most out of each lesson, and ask for assistance if you feel like you need it.

## 9. Data Management
The next step consists of getting familiar with the Repository Pattern, a design pattern that is widely used by many Flutter developers. We will use it to handle our data layer and establish our first models and repositories.

 - [ ] Read: [Implementing a Repository Pattern](https://blog.logrocket.com/implementing-repository-pattern-flutter/) (feel free to exclude the testing section, we'll cover that up later)
 - [ ] Research: [Flutter Repository Pattern Example](https://github.com/codezri/flutter-repo-bookstore)

That's great! So far we know how to build an app with stunning visuals, how to use a cutting-edge state management library, and how to manage data using repositories and models. Let's talk about how to make that data reach our app.

 - [ ] Read: [Introduction to Networking](https://docs.flutter.dev/development/data-and-backend/networking)
 - [ ] Read: [JSON and Serialization](https://docs.flutter.dev/development/data-and-backend/json)
 - [ ] Discuss with your mentor which are the best ways to serialize/deserialize JSON payloads based on a project size and development time.
### Coding Challenge III: State and Data Management
-  [ ] Implement the [Home screen](https://www.figma.com/file/gNP12kQqjDzSCyYmMiLu8F/Movy-Mobile?node-id=0%3A53).
   - The screen 04's confirmation button should navigate to this screen.
   - Build the entire layout.
   - Fetch the movie data from the [TMDb API](https://developers.themoviedb.org/3).
   - Trace the request state management using Cubits.
   - Design your layout to reflect the movie fetch status.
   - Create proper models and repositories.
- [ ] Push your changes to git and ask your mentor for a review.
- [ ] Discuss with your mentor the different architectural decisions that were taken to fulfill this exercise.


>💡 This could be a great time to show good mobile development practices! Always let the user know what's going on in your app. Show a spinner when something is pending, an error message if something failed, or a zero state widget if no items were queried.
- [ ] Implement the [Favorites screen](https://www.figma.com/file/gNP12kQqjDzSCyYmMiLu8F/Movy-Mobile?node-id=0%3A291).
    - Provide the functionality of adding/removing an item from your favorites list. Tapping an item should mark it as a favorite (adding the item to the list). Another tap should unmark it and remove it from the list. 
    - The items that were added to favorites should appear with some distinction on the Home screen as long as those items are on the list.
    - Design your solution using the BloC pattern (not Cubits).
- [ ] Push your changes to git and ask your mentor for a review.

## 10. Persistence
Let's talk about persistence and how to store data to make it available offline.
- [ ] Read: [Persistence in Flutter](https://docs.flutter.dev/cookbook/persistence)
- [ ] Read: [Shared Preferences (docs)](https://pub.dev/packages/shared_preferences)
- [ ] Watch: [Local Storage with Hydrated BloC](https://mooveit.udemy.com/course/bloc-from-zero-to-hero/learn/lecture/25184220#overview) from the BloC course.

### Coding Challenge IV: Persistence
- [ ] Use Hydrated BloC to save your favorites list: restarting the app should keep the items you marked as favorites.
- [ ] Use Shared Preferences to persist the email address from the Screen 02. This email should be kept across consequent app launches.
- [ ] _Optional_: Provide offline mode to your app! Use the [connectivity_plus](https://pub.dev/packages/connectivity_plus) package to monitor changes in the device network connectivity. You may want to use BLoC to send streams of connection changes and subscribe your widgets to react accordingly. 
   - Consider showing a "No internet connection" screen if the device loses connectivity, or;
   - create an offline experience by making your favorite list available offline and hiding the parts of the app that require internet.
- [ ] Push your changes to git and ask your mentor for a review.


## 11. Testing
While this may be the final part of the onboarding, it is by far one of the most important parts.

- [ ] Read: [Introduction to Testing](https://docs.flutter.dev/testing)
- [ ] Read: [Unit Testing](https://docs.flutter.dev/cookbook/testing/unit/introduction)
- [ ] Read: [Widget Testing](https://docs.flutter.dev/cookbook/testing/widget/introduction)
- [ ] Read: [Integration Testing](https://docs.flutter.dev/cookbook/testing/integration/introduction)
- [ ] Watch: [BloC Testing](https://mooveit.udemy.com/course/bloc-from-zero-to-hero/learn/lecture/25184078#overview)
- [ ] _(Optional)_ Read: [Get Test Coverage for your Flutter applications](https://medium.com/flutter-community/how-to-actually-get-test-coverage-for-your-flutter-applications-f881c0ae8155)

### Coding Challenge V: Testing and Profiling
Let's put some effort into creating a small subset of tests:

 - [ ] Create two unit tests.
 - [ ] Test two widgets (widget testing)
 - [ ] Create one integration test.
 - [ ] Test one of your BloCs (or cubits).
 - [ ] Push your changes to git and ask your mentor for a review.
 - [ ] Discuss with your mentor the solutions to the past two coding challenges.

>💡 It's not our intention for you to test the whole app. The aim of this coding challenge is to put into practice the different types of testing that Flutter has to provide. 

## 12. Submitting to stores
Take a look at the following readings:
 - [ ] _(Optional)_ Read: [Submitting apps to Google Play](https://mooveit.atlassian.net/wiki/spaces/STUD/pages/2250178565/Google+Play+-+Deploying+to+App+Stores)
 - [ ] _(Optional)_ Read: [Submitting apps to Apple Store](https://mooveit.atlassian.net/wiki/spaces/STUD/pages/2249916431/Apple+Store+-+Deploying+to+App+Stores)

##  Wrap up!
Thank you for reaching the end of the onboarding. We hope you had a great time building this app while learning Flutter! Let us know what you think about these lessons, as we are constantly looking for different resources or ideas to help us improve this content and keep it updated. Your help will be really much appreciated. We hope to be hearing back from you!
