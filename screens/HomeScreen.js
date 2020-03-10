import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import PostListingComponent from '../components/PostListingComponent'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <PostListingComponent/>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1565C0',
  }
});
