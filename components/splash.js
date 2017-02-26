import React, { Component } from 'react';
import { readFile } from '../common.js';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';


class Splash extends Component {
    goToLoginPage = () => {
      const navigator = this.props.navigator;
      navigator.push({
        id: 'welcome',
        gestures: false
      });
    };

    componentDidMount() {
      readFile();
      setTimeout(this.goToLoginPage, 2000);
    }

  onBack = () => {
    const navigator = this.props.navigator;
    navigator.pop();
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')}/>
        <Text style={styles.welcome}>
          React Native Developer Test.
        </Text>
        <Text style={styles.instructions}>
          Report Card App
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00B863',
  },
  logo: {
    height: 50,
    width: 100
  },
  welcome: {
    fontSize: 20,
    color:'white',
    fontWeight:'bold',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#CFD8DC',
    fontSize: 20,
    marginBottom: 5,
  },
});

module.exports = Splash;
