
import React from 'react';
import {View, StyleSheet,Text, StatusBar} from 'react-native';
import HomeScreen from './Screens/HomeScreen';

const App = () => {
  return (
    <>
    <StatusBar translucent  backgroundColor='transparent' barStyle='dark-content'></StatusBar>
    <HomeScreen/>
    </>
      );
}

const styles = StyleSheet.create({})

export default App;
