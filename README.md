# React Native Firebase Swipe App

A simple React Native app that allows users to swipe through other users, similar to Bumble. This project uses Firebase for real-time data management.

## Features

- Swipe functionality to browse through users
- Each user is shown only once per session
- Basic user attributes (name, age, profile picture)
- Firebase integration for backend data storage

## Tech Stack

- **Front-End:** React Native
- **Back-End:** Firebase (Firestore Database)

## Installation

### Prerequisites
- Node.js installed
- Expo CLI or React Native CLI
- Firebase account

### Steps
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd react-native-firebase-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   

4. Start the app:
   ```sh
   npx expo start
   ```


## Usage
- Launch the app and swipe left/right to navigate through users.
- Users are fetched from Firebase Firestore.
- Each user appears only once per session.

