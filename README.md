# Readme

## Requirements

- Strapi backend needs to be running
- Android Studio
- Android Build Tools via Android Studio (v29.0.2)
- Accepted Build Tools Lincense
- Connected Android device via USB or Emulator

## How to start

1. `yarn` to install dependencies
2. `yarn start` to start Metro bundler
3. `yarn android` to build android app and run dev server
4. `adb reverce tcp:1337 tcp:1337` to map port 1337 of host to device
