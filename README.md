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

Now download the files from this repository in ZIP format. After that, go to the downloaded folder, extract all files and open the extracted folder - "WebAppRestaurant-main". After that, you will see another folder with the same name - "WebAppRestaurant-main". Open it and now all needed files should be displayed. Please copy them all in the RestaurantApp folder. 

Now you have all the files which build the app, but this is not all you need. 
In order to be sure that it works, you have to install all the dependencies.

In order to be able to use TypeScript:
npm install -D @tsconfig/react-native @types/jest @types/react @types/react-test-renderer typescript

Now, please run the following commands:

npm install @react-navigation/native --force
npm install @react-navigation/stack --force
npm install @testing-library/react-native --force
npm install @react-native-async-storage/async-storage --force
npm install -g react-native-cli
npm install firebase --force

Also, for the credentials used for Firebase, you need a Firebase account and also to add the application to the Firebase Authentication. Then in the firebase.js file, please put your api key etc

  apiKey: "AIzaSyBWgGBUPf6tr5F1xyf6o-rT8lWLezfVB54",
  authDomain: "mobileapp-56fc1.firebaseapp.com",
  projectId: "mobileapp-56fc1",
  storageBucket: "mobileapp-56fc1.appspot.com",
  messagingSenderId: "569452177668",
  appId: "1:569452177668:web:f5e904e5ea2796c8b0c851",
  measurementId: "G-6GZR5522G8"

I hope that these are all the things that have to be done before running the app
After that, please run the following command:

npx expo start

Enjoy ;)







