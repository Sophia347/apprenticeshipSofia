# Android

Learn how to develop Android apps using Kotlin by reading material, watching talks, and doing exercises 

## 1. OOP With Kotlin

### Kotlin Basics

- [ ] Read about [Kotlin Introduction](https://developer.android.com/codelabs/kotlin-bootcamp-introduction#0), install necessary tools and practice the basic syntaxis of Kotlin code.
- [ ] Learn about the [Basics of Kotlin](https://developer.android.com/codelabs/kotlin-bootcamp-basics#0), its data types, operators, variables, booleans, conditions, practice with arrays, lists and loops.
- [ ] Learn about the [Kotlin functions](https://developer.android.com/codelabs/kotlin-bootcamp-functions#0) to create a program with a main() function, using compact functions, list filters, basic lambdas, etc.
- [ ] Learn about [Kotlin classes](https://developer.android.com/codelabs/kotlin-bootcamp-classes#0) while you create a small program using abstract classes, subclasses and interfaces.
- [ ] Finish with [Kotlin extensions](https://developer.android.com/codelabs/kotlin-bootcamp-extensions#0) to learn about collections, constants and extensions functions.

We expect at the end of each Bootcamp the results of the homeworks assigned.

> Learning more about each chapter is up to the mentee to choose what to read. If the mentee chooses to read something from there take a note of what the mentee read. Share with your mentor if you find some good readings!

### Kotlin Extras

These chapters are up to the mentor to decide if the mentee should go over the extras.

- [ ] [Generics](https://codelabs.developers.google.com/codelabs/kotlin-bootcamp-generics/)
- [ ] [Functional manipulation](https://codelabs.developers.google.com/codelabs/kotlin-bootcamp-sams/)

##### Kotlin Coding Convention

- [ ] [Conventions](https://kotlinlang.org/docs/coding-conventions.html#names-for-backing-properties)

##### Kotlin Idioms

- [ ] [Idioms](​​https://kotlinlang.org/docs/idioms.html)

## 2. Android Basics

### Lesson 1

This lesson teaches you how to set up Android Studio to use Kotlin and how to build apps. You learn how Android projects are structured.
- [ ] Start with how to [install](https://developer.android.com/codelabs/kotlin-android-training-install-studio?index=..%2F..android-kotlin-fundamentals#0) and start Android Studio IDE.
- [ ] Continue with [How to build a basic Android app](https://developer.android.com/codelabs/kotlin-android-training-get-started#0) in Android Studio.

###### Homework
Ask your mentor to create a git repository inside Moove it org, fork it, add your mentor as a collaborator, and finally do the coding challenge. Be sure to add a gitignore file.

After pushing your changes for the coding challenge, continue with the homework section and create a Pull Request with the changes.


### Lesson 2 - Udemy Course

For this lesson go to [Udemy]( https://mooveit.udemy.com/) with the following credentials:

* Email: training-student-2@moove-it.com
* Password: 123Mooveit*

- [ ] Start from Section 2 [#13 Hellow World](https://mooveit.udemy.com/course/android-kotlin-developer/learn/lecture/16824308#overview)

- [ ] Continue with [#14 People Counter App](https://mooveit.udemy.com/course/android-kotlin-developer/learn/lecture/17998371#overview)

Create a new branch inside your previous repo and push your changes for the People Counter App, then create a PR explaining the changes, add your mentor and co-mentor as reviewers

- [ ] Finish with [Age in minutes App](https://mooveit.udemy.com/course/android-kotlin-developer/learn/lecture/29171762#overview)

###### Homework
Create a new branch with all the setup needed for the Age in Minutes app. Create commit by commit progress showing all the changes needed for this app to work. Add a PR or PRs for the mentor to review!

Change the calculation from minutes to days. Also, is this code as polished as it can be? If you find improvements, clean the code and submit it with a new commit explaining the changes.


### Lesson 3 - Udemy Course

- [ ] Start [Calculator App](https://mooveit.udemy.com/course/android-kotlin-developer/learn/lecture/29174200#overview)

###### Homework
Create a new branch with all the setup needed for the Calculator app. Create commit by commit progress showing all the changes needed for this app to work. Add a PR or PRs for the mentor to review!

Is this code as polished as it can be? If you find improvements, clean the code and submit it with a new commit explaining the changes.


### Lesson 4 - Testing

- [ ] Go through [Testing Fundamentals](https://developer.android.com/training/testing/fundamentals)

- [ ] Continue with [Local Test](https://developer.android.com/training/testing/local-tests)

- [ ] Then read [Unit Test](https://proandroiddev.com/understanding-unit-tests-for-android-in-2021-71984f370240)


`Read until you reach "I'm ready, show me a real use case sample"`

###### Homework
Is there anything inside the Calculator App that can be tested? Should there be changes to make the tests easier? Why?

Do whatever is needed to add Unit tests for Calculator App logic. Push your changes and create a PR.


### Lesson 5 - Udemy Course

- [ ] Start [Quiz App](https://mooveit.udemy.com/course/android-kotlin-developer/learn/lecture/29171658#overview)


###### Homework
Create a new branch with all the setup needed for the Quiz app. Create commit by commit progress showing all the changes needed for this app to work. Add a PR or PRs for the mentor to review! Also, don't forget to add Unit Tests!

Is this code as polished as it can be? If you find improvements, clean the code and submit it with a new commit explaining the changes.


### Lesson 6 - Activities

- [ ] Read [Activities lifecycle](https://developer.android.com/guide/components/activities/activity-lifecycle)

###### Homework
Under the Quiz app, override all lifecycle methods inside the different Activities created. Add Log messages inside each lifecycle method and navigate through the Activities. What do you see? Discuss with your mentor.


### Lesson 7 - Fragments

- [ ] Start with [Fragments overview](​​https://developer.android.com/guide/fragments)

- [ ] Continue with [Create Fragment chapter](https://developer.android.com/guide/fragments/lifecycle)


###### Homework
Under the Quiz app, refactor the Activities and make all the UI be held by a Fragment. We don't want UI logic inside the Activity, move all to a Fragment. In the end, each Activity should have a Fragment.

<b>Note:</b> You will need to navigate from a Fragment to an Activity, each Fragment has access to a context, that context is the activity holding the fragment, you can call startActivity as you would do with an Activity directly.  

Push your changes and make a PR.

Override lifecycle methods inside the Fragment, and navigate through the activities. What do you see? Discuss with your mentor.

What will happen if instead of an Activity and a Single Fragment, more than one fragment is needed per Activity? What will change? 

Investigate and discuss with your mentor. Remember this knowledge as in the last exercise of Android Basics you will need it.


### Lesson 8 - ScrollView


What would happen if for the Quiz app, instead of having a fixed set of responses, we want to variate them? Will this behave correctly in all screen sizes?

Add more question options and run the application on a small device using an emulator.

What problem do you see?

- [ ] Read about [ScrollView](https://developer.android.com/reference/android/widget/ScrollView)

Add a ScrollView to the XML if needed. Push your changes!

### Lesson 9 - RecyclerView

Common applications need to display a list of objects, check most popular applications like Instagram, LinkedIn, Pinterest, what do you see, infinite scrolling, right? But solving this with a ScrollView can end in performance issues. 

- [ ] To solve this please [check](https://developer.android.com/guide/topics/ui/layout/recyclerview)

`You will be using this new concept in the next exercise.`


### Lesson 10 - Data file storage

- [ ] Read about [Data and File storage](https://developer.android.com/training/data-storage)

- [ ] Continue with [Key Value Storage](https://developer.android.com/training/data-storage/shared-preferences)

### Final Project - ToDo List

- [ ] Read and develop [ToDo Application](https://docs.google.com/document/d/1_1XrF96kDZgh11PSq-G99aTITQ8UWmv24MgVyh9hko8/edit?usp=sharing)