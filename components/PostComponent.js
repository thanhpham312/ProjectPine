import React from 'react';
import { View, Text, Image, TouchableNativeFeedback, StyleSheet } from 'react-native';

export default function PostComponent(props) {
  let post = props.post

  let thumbnailURL = post.data.thumbnail
  if (thumbnailURL === 'default') {
    thumbnailURL = 'https://www.reddit.com/static/noimage.png';
  } else if (thumbnailURL === 'self') {
    thumbnailURL = 'https://www.reddit.com/static/self_default2.png'
  } else if (thumbnailURL === 'nsfw') {
    thumbnailURL = 'https://www.reddit.com/static/nsfw2.png'
  }

  return (
    <TouchableNativeFeedback
        onPress={()=>{
          this.pressPost(post.largeImageURL);
        }}
        useForeground={true}
      >
        <View style={styles.postWrapper}>
          <View style={styles.postHeader}>

          </View>
          <View style={styles.postContent}>
            <View style={styles.postThumbnailWrapper}>
              <Image style={styles.postThumbnail}
                source={{
                  uri: thumbnailURL
                }}
              />
            </View>
            <View style={styles.postTitleWrapper}>
              <Text style={styles.postTitle}>{post.data.title}</Text>
            </View>
          </View>
          <View style={styles.postFooter}>

          </View>
        </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  postWrapper: {
    flex: 1,
    margin: 10,
    marginBottom: 0,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    borderRadius: 5,
    elevation: 3,
    flexDirection: 'column'
  },
  postHeader: {
    flex: 0.1
  },
  postContent: {
    flex: 0.8,
    flexDirection: 'row',
    minHeight: 100,
    padding: 5
  },
  postFooter: {
    flex: 0.1
  },
  postTitleWrapper: {
    flex: 0.75,
    backgroundColor: '#fff',
  },
  postThumbnailWrapper: {
    flex: 0.25,
    justifyContent: 'flex-start',
  },
  postTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingRight: 5,
    paddingBottom: 5,
    paddingLeft: 5
  },
  postThumbnail: {
    position: 'absolute',
    top: 5,
    left: 5,
    width: 80,
    height: 80,
    borderRadius: 5,
    resizeMode: "cover",
  },
})