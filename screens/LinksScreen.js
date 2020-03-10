import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.placeholderImage}
        source={require('../assets/images/placeholder.png')}
        resizeMode='contain'
      />
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Subreddits',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    flexDirection: 'row'
  },
  placeholderImage: {
    flex : 1 ,
  }
});
