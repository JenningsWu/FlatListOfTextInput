/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager'

KeyboardManager.setEnable(true);

KeyboardManager.setEnableDebugging(true)
KeyboardManager.setEnableAutoToolbar(true);
KeyboardManager.setToolbarPreviousNextButtonEnable(true)

import App from './app'

AppRegistry.registerComponent('FlatListOfTextInput', () => App);
