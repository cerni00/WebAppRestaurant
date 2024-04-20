# WebAppRestaurant
This app is created in React Native. At first, it has a login page that allows logging in or registering a new user. Once logged in, display a list of 10 random Restaurant’s names. In order to leave a review, it has 1-5 stars and a text field. You can not leave just a written review or just a start rating. You have to write a review and also leave a star rating at the same time. Otherwise, an error message will prompt.

First I set up a new React Native Project.
The easiest way to get started is with Expo Go.
The most relevant feature for us right now is that it can get you writing a React Native app within minutes.

You will only need a recent version of Node.js and a phone or emulator.

Install the Expo Go app on your iOS or Android phone and connect to the same wireless network as your computer. On Android, use the Expo Go app to scan the QR code from your terminal to open your project. On iOS, use the built-in QR code scanner of the default iOS Camera app.

After you have installed Node.js, please install Expo CLI:
npm install -g expo-cli

Now, teoretically, there would be no need to build another application, because we already have one. But some files could not be uploaded due to size, so we have to do a few steps before using this application:

1. Choos a place where you want to run this application or create a new folder an open it from the terminal, then run the following:
npx create-expo-app RestaurantApp
cd RestaurantApp

Now you will see a few files created which are mandatory for running an app, but we need just the "node_modules" folder, because those mandatory files are already here in the repository, so we want to avoid any conflict.

Please delete the the following files: "assets" folder, "App.js", "app.json", "babel.config.js", "package-lock.json", "package.json" 







