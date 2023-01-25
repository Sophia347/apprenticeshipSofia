# React Native

Learn how to develop applications using React Native.

## 0. Pre requisites

- [ ] Complete the [Basic onboarding](./basic.md)
- [ ] Complete the [Javascript onboarding](./javascript.md)

## 1. Setup

Setup your computer before you start

- [ ] Install [Homebrew](https://brew.sh/)
- [ ] Use homebrew to install [Git](https://git-scm.com/downloads), [Nvm](https://github.com/creationix/nvm), [Watchman](https://formulae.brew.sh/formula/watchman)
- [ ] Choose a code editor, VS Code is always a great choice since it has debugging capabilities specifically for React Native. Nevertheless, it’s up to you with which you find yourself more comfortable. [VSCode](https://code.visualstudio.com), [Atom](https://atom.io), [Sublime](https://www.sublimetext.com/). If you choose VSCode install the following packages [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [React Native Tools](https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native)
- [ ] Install [iTerm](https://www.iterm2.com) or [Oh my ZSH](https://github.com/robbyrussell/oh-my-zsh)
- [ ] Install XCode from the AppStore and [Android Studio](https://developer.android.com/studio)

## 2. React

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. It can be used as a base in the development of single-page or mobile applications.

*It’s important to define that React is just a UI library. It’s a fantastic tool that lets you define your UI, but nothing else. React doesn’t even define an architecture, so that’s something that has to be defined by the developers.*

- [ ] Complete [React practical tutorial](https://reactjs.org/tutorial/tutorial.html) and/or [React technical tutorial](https://reactjs.org/docs/hello-world.html), some people like to start coding from the beginning, other like the step by step technical tutorial, choose the one that fits you.

## 3. React Lifecycle

Lifecycle methods are methods that we can implement that are ran at a specific point in the usage of a component. As their name implies, it’s related to the “life” of the component. Think about it as if the component has a life. It’s born, then it changes (updated) and lastly, it dies. You can execute code at any of this moments

- [ ] Read [Official docs](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
- [ ] Look at [Lifecycle diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram), a really useful diagram to see each method and when it’s executed.
- [ ] (Optional) [Deep dive into lifecycle methods](https://programmingwithmosh.com/javascript/react-lifecycle-methods)

## 4. Hooks

Since their announcement, hooks have redefined the way we develop react components and behaviours, so it’s key for you to understand how they work before going deeper into react-native.

- [ ] Read [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)
- [ ] Review [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)
- [ ] Look to [resources](https://mooveit.atlassian.net/wiki/spaces/STUD/pages/2202894341/React+Native+Resourses)
- [ ] (Optional) [New React Docs](https://beta.reactjs.org/learn) currently in beta. All explanations are written using Hooks rather that classes.
- [ ] Update React tutorial (Tic Tac Toe) to use hooks

## 5. Getting started with React Native

- [ ] Read [Why React Native](https://docs.google.com/document/d/1UjgP1UjYBTVRuPpHnp1Sbg1tbd2cWMaE1kKSkL_F75U)
- [ ] Read everything from [The Basics](https://reactnative.dev/docs/getting-started)
- [ ] Read [Style](https://reactnative.dev/docs/style)
- [ ] Read [Height and Width](https://reactnative.dev/docs/height-and-width)
- [ ] Read [Layout with Flexbox](https://reactnative.dev/docs/flexbox)
- [ ] Read [Images](https://reactnative.dev/docs/images)

## 6. Debugging & Developer tools

- [ ] Read [Debugging React Native Applications](https://medium.com/reactnativeacademy/debugging-react-native-applications-6bff3f28c375)
- [ ] Read [Debugging - Official docs](https://reactnative.dev/docs/debugging)

In order to open the developer menu, you have to follow these instructions. It’s important to clarify that this works both for the simulators and for a real device:

**iOS**

Do one of the following:
- Command + D
- Using the Shake Gesture

**Android**

Do one of the following:
- Command + M
- Run the following command: `adb shell input keyevent 82 `

## 7. Coding challenge Movy App

- [ ] Build Movie App using Moove It's [react-native-template](https://github.com/moove-it/react-native-template)

#### Resources

- [API Docs](https://developers.themoviedb.org/3)
- [Movy App Mockups](https://www.figma.com/file/gNP12kQqjDzSCyYmMiLu8F/Movy-Mobile)

## 7.1 Movies list

- [ ] List all movies coming from the API

#### Resources

- [ ] Read [Networking official documentation](https://reactnative.dev/docs/network)
- [ ] Read [Axios documentation](https://github.com/axios/axios)

## 7.2. Movie detail

Navigation is one of the most important things of an app.

- [ ] Read [Navigating Between Screens](https://reactnative.dev/docs/navigation)
- [ ] Read [Navigation core concepts](https://docs.google.com/document/d/1X81D2yj_eLPUqc5GlQPwcbvL4BkP0kzddv6kwcdYk9Y)
- [ ] Show Movies detail with the appropriate navigation

## 7.3. Handling state

One of the key parts of your application is how you handle state. Here at moove it, we use redux both on react and react-native.

- [ ] Read [Redux documentation](https://redux.js.org) and do not skip the [Redux Style Guide](https://redux.js.org/style-guide/style-guide)
- [ ] Read [Getting Started with React Redux](https://react-redux.js.org/introduction/getting-started)
- [ ] Read [React Redux Quick Start](https://react-redux.js.org/tutorials/quick-start)

After you have a clear understanding of how redux works, you should take a look at how async actions and middleware work

- [ ] Read [Understanding Middleware](https://redux.js.org/understanding/history-and-design/middleware)
- [ ] Read [Redux Thunk documentation](https://github.com/reduxjs/redux-thunk)
- [ ] Update current code to use redux

## 7.4. Configuration variables

**Important:** Do not store sensitive keys in `.env`. It's [almost impossible to prevent users from reverse engineering mobile app secrets](https://rammic.github.io/2015/07/28/hiding-secrets-in-android-apps), so design your app (and APIs) with that in mind.

- [ ] Read [React Native Config documentation](https://github.com/luggit/react-native-config)
- [ ] Move the app configuration (API base URL, API key, etc) to an `.env` file

## 7.5. Testing

- [ ] Read [Testing documentation](https://docs.google.com/document/d/17QUiD_HE2OYSVxC_vKikyhEIA7QS28f8NmQLat_z1hk)
- [ ] Add tests to the app

## 7.6. Persistence

There are a lot of solutions to persist your store on the device, redux-persist is our first choice, it’s a pretty simple library, so just read the docs and you are good to go.

- [ ] Read [Redux Persist documentation](https://github.com/rt2zz/redux-persist)
- [ ] Allow the user to mark movies as favourites
- [ ] Display users's favourites on home view
- [ ] These selections should be kept across consequent app launches

## 7.7. Offline mode

The app should be usable offline.

Whenever there's no internet, the app should show the latest data that was recieved. Nevertheless, data should have an expiration date. If the latest data was fetched more than a day ago, it shouldn't be used and no data should be shown. This expiration date should be easily changeable, in order to be able to test it/update it.

## 7.8 Publish the app

The app should be published for internal testing to both App Store and Play Store.

- [ ] Read [Submitting apps to stores](https://github.com/moove-it/knowledge/tree/develop/mobile/react-native/submitting-apps-to-stores)
- [ ] Ask your mentor for developer access to both stores
- [ ] Upload the app to the stores and make it available for internal testers
