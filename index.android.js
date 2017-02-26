

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

import SplashScreen from './components/splash.js';
import WelcomeScreen from './components/welcome.js';
import ReportScreen from './components/report.js';
import SearchScreen from './components/search.js';


export default class reportapp extends Component {

  render() {
      return (
        <Navigator
          configureScene={(route) =>
            ({ ...Navigator.SceneConfigs.HorizontalSwipeJump, gestures: false })}
          initialRoute={{ id: 'splash', name: 'Index' }}
          renderScene={ this.renderScene.bind(this)}
        />
      );
  }
  renderScene(route, navigator) {
    const routeId = route.id;
    const searchTerm = route.searchTerm;
    const type = route.type;
    const subjectName = route.subjectName;
    const reportType = route.reportType;
    if (routeId === 'search') {
      return (
        <SearchScreen
         searchTerm={searchTerm}
         type={type}
          navigator={navigator}
        />
      );
    } else if (routeId === 'report') {
      return (
        <ReportScreen
          subjectName={subjectName}
          reportType={reportType}
          navigator={navigator}
        />
      );
    } else if (routeId === 'splash') {
      return (
        <SplashScreen
          navigator={navigator}
        />
      );
    }  else if (routeId === 'welcome') {
      return (
        <WelcomeScreen
          navigator={navigator}
        />
      );
    }
  }
}


AppRegistry.registerComponent('reportapp', () => reportapp);
