# Superapp v1

This is a React Native project focused on building a Server-Driven UI (SDUI) runtime. The application dynamically renders screens and forms based on a predefined **App Schema**.

## Features

- **Schema-Driven UI:** The app parses a JSON/TypeScript schema (`AppSchema`) to dynamically construct the user interface.
- **Dynamic Form Rendering:** Automatically generates forms with various input types (text, numbers, etc.) based on defined `Entity` fields within the schema.
- **Runtime Renderer:** `RuntimeRenderer` maps the schema's screens to corresponding React Native components, like `FormScreen`.

## Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Step 1: Install Dependencies

```sh
npm install
# OR using Yarn
yarn install
```

### Step 2: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

### Step 3: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

#### Android
```sh
npm run android
# OR using Yarn
yarn android
```

#### iOS
For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).
```sh
cd ios && bundle exec pod install && cd ..
```
```sh
npm run ios
# OR using Yarn
yarn ios
```

## How It Works

1. **Schema Definition:** Define your app structure in `src/types/AppSchema.ts`. This includes screens and entities (with their respective fields).
2. **Runtime Rendering:** The `RuntimeRenderer` receives the schema, identifies the initial screen, and renders the matched component.
3. **Dynamic Forms:** For data-entry screens, `FormScreen` utilizes `DynamicForm` to read the entity's fields and dynamically generate `TextInput` and other controls, handling the state and submission autonomously.

## Acknowledgements

Bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).
