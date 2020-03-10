import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableNativeFeedback, Modal, ActivityIndicator, StyleSheet } from 'react-native';

import PostComponent from './PostComponent';

export default class PostListingComponent extends Component {
  constructor() {
    super();

    this.state = {
      subreddit: '',
      subredditListingLimit: '50',
      subredditListingAfter: '',
      currentPostListing: [],
      modalVisible: false,
      currentLinkURI: ''
    }

    this.changeSubreddit = this.changeSubreddit.bind(this);
  }

  componentDidMount() {
    this.changeSubreddit('all')
  }

  async changeSubreddit(subreddit) {
    await this.setState({
      subreddit: subreddit,
      subredditListingAfter: '',
      currentPostListing: []
    })
    this.fetchPost();
  }
  
  fetchPost() {
    let fetchURL = 'https://www.reddit.com/r/'

    if (this.state.subreddit !== '') {
      fetchURL += this.state.subreddit + '.json' + '?limit=' + this.state.subredditListingLimit + '&after=' + this.state.subredditListingAfter;
    }

    fetch(fetchURL)
    .then((response) => response.json())
    .then((response) => {
        this.setState({
          currentPostListing: response.data.children,
          subredditListingAfter: response.data.after
        })
    })
  }

  async pressPost(LinkURL){
    await this.setState({
        currentLinkURI: LinkURL
    });
    this.setState({modalVisible: true});
  }

  renderPost({item}) {
    return(
      <PostComponent post={item} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
            contentContainerStyle={styles.postList}
            data={this.state.currentPostListing}
            keyExtractor={(item, index) => item.data.id.toString()}
            renderItem={this.renderPost}
            numColumns={1}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    elevation: 1,
    top: 100,
    paddingTop: 10,
    paddingBottom: 8,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  postList: {
    flexDirection: 'column',
  },
});